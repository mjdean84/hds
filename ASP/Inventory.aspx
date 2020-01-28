<%@ Page Title="Inventory" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Inventory.aspx.cs" Inherits="HDS1.Inventory" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">
    <!--Banner-->
    <div class="jumbotron">
        <div class="container">
            <h1 class="display-3">Appliance Inventory</h1>
            <a href="~/New_Inventory_Item" runat="server">New Item</a><br />
            <a href="~/Employee_Resources" runat="server">Back to Resources</a>
        </div>      
    </div>

    <!--Inventory Search-->
    <div class="container form-inline">
        <asp:Panel ID="Panel2" runat="server" DefaultButton="SerialBtn" CssClass="mr-5">
            <asp:TextBox ID="SerialTxt" runat="server" placeholder="Serial..."></asp:TextBox>
            <asp:Button ID="SerialBtn" runat="server" Text="Search" OnClick="SerialBtn_Click" />
        </asp:Panel>
        <asp:Panel ID="Panel1" runat="server" DefaultButton="SearchBtn">
            <asp:TextBox ID="SearchTxt" runat="server" placeholder="Model, brand or description..."></asp:TextBox>
            <asp:Button ID="SearchBtn" runat="server" Text="Search" OnClick="SearchBtn_Click" />
            <asp:Button ID="ResetBtn" runat="server" Text="Reset" Visible="false" OnClick="ResetBtn_Click" CssClass="btn-primary" />
        </asp:Panel>
    </div>

    <br />

    <!--All Inventory-->
    <div class="container">
        <div class="row">
            <div class="col-12 table-responsive">
                <asp:GridView ID="GrdAllInventory" CssClass="table table-bordered table-striped table-condensed"  runat="server" AllowPaging="True" 
                    AllowSorting="True" AutoGenerateColumns="False" DataKeyNames="Serial" DataSourceID="SqlDataSource2" OnPreRender="GrdInventory_PreRender" 
                    PagerStyle-HorizontalAlign="Center" PageSize="20">
                    <Columns>
                        <asp:CommandField ShowDeleteButton="True" ShowEditButton="True" />
                        <asp:BoundField DataField="Model" HeaderText="Model" SortExpression="Model" ItemStyle-CssClass="text-uppercase" />
                        <asp:BoundField DataField="Serial" HeaderText="Serial" ReadOnly="True" SortExpression="Serial" />
                        <asp:BoundField DataField="Brand" HeaderText="Brand" SortExpression="Brand" ItemStyle-CssClass="text-capitalize" />
                        <asp:BoundField DataField="Description" HeaderText="Description" SortExpression="Description" ItemStyle-CssClass="text-capitalize" />
                        <asp:BoundField DataField="Cost" HeaderText="Cost" SortExpression="Cost" />
                        <asp:BoundField DataField="Price" HeaderText="Price" SortExpression="Price" />
                    </Columns>
                </asp:GridView>
                <asp:SqlDataSource ID="SqlDataSource2" runat="server" ConflictDetection="CompareAllValues" ConnectionString="<%$ ConnectionStrings:Home Design SolutionsConnectionString %>" DeleteCommand="DELETE FROM [Inventory] WHERE [Serial] = @original_Serial AND (([Model] = @original_Model) OR ([Model] IS NULL AND @original_Model IS NULL)) AND (([Brand] = @original_Brand) OR ([Brand] IS NULL AND @original_Brand IS NULL)) AND (([Description] = @original_Description) OR ([Description] IS NULL AND @original_Description IS NULL)) AND (([Cost] = @original_Cost) OR ([Cost] IS NULL AND @original_Cost IS NULL)) AND (([Price] = @original_Price) OR ([Price] IS NULL AND @original_Price IS NULL))" InsertCommand="INSERT INTO [Inventory] ([Model], [Serial], [Brand], [Description], [Cost], [Price]) VALUES (@Model, @Serial, @Brand, @Description, @Cost, @Price)" OldValuesParameterFormatString="original_{0}" SelectCommand="SELECT * FROM [Inventory] ORDER BY [Model], [Serial]" UpdateCommand="UPDATE [Inventory] SET [Model] = @Model, [Brand] = @Brand, [Description] = @Description, [Cost] = @Cost, [Price] = @Price WHERE [Serial] = @original_Serial AND (([Model] = @original_Model) OR ([Model] IS NULL AND @original_Model IS NULL)) AND (([Brand] = @original_Brand) OR ([Brand] IS NULL AND @original_Brand IS NULL)) AND (([Description] = @original_Description) OR ([Description] IS NULL AND @original_Description IS NULL)) AND (([Cost] = @original_Cost) OR ([Cost] IS NULL AND @original_Cost IS NULL)) AND (([Price] = @original_Price) OR ([Price] IS NULL AND @original_Price IS NULL))">
                    <DeleteParameters>
                        <asp:Parameter Name="original_Serial" Type="Int32" />
                        <asp:Parameter Name="original_Model" Type="String" />
                        <asp:Parameter Name="original_Brand" Type="String" />
                        <asp:Parameter Name="original_Description" Type="String" />
                        <asp:Parameter Name="original_Cost" Type="Double" />
                        <asp:Parameter Name="original_Price" Type="Double" />
                    </DeleteParameters>
                    <InsertParameters>
                        <asp:Parameter Name="Model" Type="String" />
                        <asp:Parameter Name="Serial" Type="Int32" />
                        <asp:Parameter Name="Brand" Type="String" />
                        <asp:Parameter Name="Description" Type="String" />
                        <asp:Parameter Name="Cost" Type="Double" />
                        <asp:Parameter Name="Price" Type="Double" />
                    </InsertParameters>
                    <UpdateParameters>
                        <asp:Parameter Name="Model" Type="String" />
                        <asp:Parameter Name="Brand" Type="String" />
                        <asp:Parameter Name="Description" Type="String" />
                        <asp:Parameter Name="Cost" Type="Double" />
                        <asp:Parameter Name="Price" Type="Double" />
                        <asp:Parameter Name="original_Serial" Type="Int32" />
                        <asp:Parameter Name="original_Model" Type="String" />
                        <asp:Parameter Name="original_Brand" Type="String" />
                        <asp:Parameter Name="original_Description" Type="String" />
                        <asp:Parameter Name="original_Cost" Type="Double" />
                        <asp:Parameter Name="original_Price" Type="Double" />
                    </UpdateParameters>
                </asp:SqlDataSource>
            </div>
        </div>
    </div>

    <!--Filtered Serial Inventory-->
    <div class="container">
        <div class="row">
            <div class="col-12 table-responsive">
                <asp:GridView ID="GrdSerialInventory" runat="server" AutoGenerateColumns="False" CssClass="table table-bordered table-striped table-condensed" 
                    DataSourceID="SqlDataSource3" OnPreRender="GrdInventory_PreRender" PagerStyle-HorizontalAlign="Center" AllowPaging="True" 
                    PageSize="20" AllowSorting="True" DataKeyNames="Serial" Visible="false" ShowHeaderWhenEmpty="true" EmptyDataText="No records found">
                    <Columns>
                        <asp:CommandField ShowDeleteButton="True" ShowEditButton="True" />
                        <asp:BoundField DataField="Model" HeaderText="Model" SortExpression="Model" ItemStyle-CssClass="text-uppercase" />
                        <asp:BoundField DataField="Serial" HeaderText="Serial" ReadOnly="True" SortExpression="Serial" />
                        <asp:BoundField DataField="Brand" HeaderText="Brand" SortExpression="Brand" ItemStyle-CssClass="text-capitalize" />
                        <asp:BoundField DataField="Description" HeaderText="Description" SortExpression="Description" ItemStyle-CssClass="text-capitalize" />
                        <asp:BoundField DataField="Cost" HeaderText="Cost" SortExpression="Cost" />
                        <asp:BoundField DataField="Price" HeaderText="Price" SortExpression="Price" />
                    </Columns>
                </asp:GridView>
                <asp:SqlDataSource ID="SqlDataSource3" runat="server" ConflictDetection="CompareAllValues" ConnectionString="<%$ ConnectionStrings:Home Design SolutionsConnectionString %>" DeleteCommand="DELETE FROM [Inventory] WHERE [Serial] = @original_Serial AND (([Model] = @original_Model) OR ([Model] IS NULL AND @original_Model IS NULL)) AND (([Brand] = @original_Brand) OR ([Brand] IS NULL AND @original_Brand IS NULL)) AND (([Description] = @original_Description) OR ([Description] IS NULL AND @original_Description IS NULL)) AND (([Cost] = @original_Cost) OR ([Cost] IS NULL AND @original_Cost IS NULL)) AND (([Price] = @original_Price) OR ([Price] IS NULL AND @original_Price IS NULL))" InsertCommand="INSERT INTO [Inventory] ([Model], [Serial], [Brand], [Description], [Cost], [Price]) VALUES (@Model, @Serial, @Brand, @Description, @Cost, @Price)" OldValuesParameterFormatString="original_{0}" SelectCommand="SELECT * FROM [Inventory] WHERE ([Serial] = @Serial) ORDER BY [Model], [Serial]" UpdateCommand="UPDATE [Inventory] SET [Model] = @Model, [Brand] = @Brand, [Description] = @Description, [Cost] = @Cost, [Price] = @Price WHERE [Serial] = @original_Serial AND (([Model] = @original_Model) OR ([Model] IS NULL AND @original_Model IS NULL)) AND (([Brand] = @original_Brand) OR ([Brand] IS NULL AND @original_Brand IS NULL)) AND (([Description] = @original_Description) OR ([Description] IS NULL AND @original_Description IS NULL)) AND (([Cost] = @original_Cost) OR ([Cost] IS NULL AND @original_Cost IS NULL)) AND (([Price] = @original_Price) OR ([Price] IS NULL AND @original_Price IS NULL))">
                    <DeleteParameters>
                        <asp:Parameter Name="original_Serial" Type="Int32" />
                        <asp:Parameter Name="original_Model" Type="String" />
                        <asp:Parameter Name="original_Brand" Type="String" />
                        <asp:Parameter Name="original_Description" Type="String" />
                        <asp:Parameter Name="original_Cost" Type="Double" />
                        <asp:Parameter Name="original_Price" Type="Double" />
                    </DeleteParameters>
                    <InsertParameters>
                        <asp:Parameter Name="Model" Type="String" />
                        <asp:Parameter Name="Serial" Type="Int32" />
                        <asp:Parameter Name="Brand" Type="String" />
                        <asp:Parameter Name="Description" Type="String" />
                        <asp:Parameter Name="Cost" Type="Double" />
                        <asp:Parameter Name="Price" Type="Double" />
                    </InsertParameters>
                    <SelectParameters>
                        <asp:ControlParameter ControlID="SerialTxt" Name="Serial" PropertyName="Text" Type="Int32" />
                    </SelectParameters>
                    <UpdateParameters>
                        <asp:Parameter Name="Model" Type="String" />
                        <asp:Parameter Name="Brand" Type="String" />
                        <asp:Parameter Name="Description" Type="String" />
                        <asp:Parameter Name="Cost" Type="Double" />
                        <asp:Parameter Name="Price" Type="Double" />
                        <asp:Parameter Name="original_Serial" Type="Int32" />
                        <asp:Parameter Name="original_Model" Type="String" />
                        <asp:Parameter Name="original_Brand" Type="String" />
                        <asp:Parameter Name="original_Description" Type="String" />
                        <asp:Parameter Name="original_Cost" Type="Double" />
                        <asp:Parameter Name="original_Price" Type="Double" />
                    </UpdateParameters>
                </asp:SqlDataSource>
            </div>
        </div>
    </div>

    <!--Filtered String Inventory-->
    <div class="container">
        <div class="row">
            <div class="col-12 table-responsive">
                <asp:GridView ID="GrdFiltInventory" runat="server" AutoGenerateColumns="False" CssClass="table table-bordered table-striped table-condensed" 
                    DataSourceID="SqlDataSource1" OnPreRender="GrdInventory_PreRender" PagerStyle-HorizontalAlign="Center" AllowPaging="True" 
                    PageSize="20" AllowSorting="True" DataKeyNames="Serial" Visible="false" ShowHeaderWhenEmpty="true" EmptyDataText="No records found">
                    <Columns>
                        <asp:CommandField ShowDeleteButton="True" ShowEditButton="True" />
                        <asp:BoundField DataField="Model" HeaderText="Model" SortExpression="Model" ItemStyle-CssClass="text-uppercase" />
                        <asp:BoundField DataField="Serial" HeaderText="Serial" SortExpression="Serial" ReadOnly="True" />
                        <asp:BoundField DataField="Brand" HeaderText="Brand" SortExpression="Brand" ItemStyle-CssClass="text-capitalize" />
                        <asp:BoundField DataField="Description" HeaderText="Description" SortExpression="Description" ItemStyle-CssClass="text-capitalize" />
                        <asp:BoundField DataField="Cost" HeaderText="Cost" SortExpression="Cost" />
                        <asp:BoundField DataField="Price" HeaderText="Price" SortExpression="Price" />
                    </Columns>
                    <PagerSettings Mode="Numeric" />
                    <PagerStyle HorizontalAlign="Center" CssClass="pagerStyle"></PagerStyle>
                </asp:GridView>
                <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:Home Design SolutionsConnectionString %>" 
                    SelectCommand="SELECT * FROM [Inventory] WHERE (([Brand] LIKE '%' + @Brand + '%') OR ([Description] LIKE '%' + @Description + '%') OR ([Model] LIKE '%' + @Model + '%')) ORDER BY [Model], [Serial]" OldValuesParameterFormatString="original_{0}" ConflictDetection="CompareAllValues" 
                    DeleteCommand="DELETE FROM [Inventory] WHERE [Serial] = @original_Serial AND (([Model] = @original_Model) OR ([Model] IS NULL AND @original_Model IS NULL)) AND (([Brand] = @original_Brand) OR ([Brand] IS NULL AND @original_Brand IS NULL)) AND (([Description] = @original_Description) OR ([Description] IS NULL AND @original_Description IS NULL)) AND (([Cost] = @original_Cost) OR ([Cost] IS NULL AND @original_Cost IS NULL)) AND (([Price] = @original_Price) OR ([Price] IS NULL AND @original_Price IS NULL))" 
                    InsertCommand="INSERT INTO [Inventory] ([Model], [Serial], [Brand], [Description], [Cost], [Price]) VALUES (@Model, @Serial, @Brand, @Description, @Cost, @Price)" 
                    UpdateCommand="UPDATE [Inventory] SET [Model] = @Model, [Brand] = @Brand, [Description] = @Description, [Cost] = @Cost, [Price] = @Price WHERE [Serial] = @original_Serial AND (([Model] = @original_Model) OR ([Model] IS NULL AND @original_Model IS NULL)) AND (([Brand] = @original_Brand) OR ([Brand] IS NULL AND @original_Brand IS NULL)) AND (([Description] = @original_Description) OR ([Description] IS NULL AND @original_Description IS NULL)) AND (([Cost] = @original_Cost) OR ([Cost] IS NULL AND @original_Cost IS NULL)) AND (([Price] = @original_Price) OR ([Price] IS NULL AND @original_Price IS NULL))">
                    
                    <DeleteParameters>
                        <asp:Parameter Name="original_Serial" Type="Int32" />
                        <asp:Parameter Name="original_Model" Type="String" />
                        <asp:Parameter Name="original_Brand" Type="String" />
                        <asp:Parameter Name="original_Description" Type="String" />
                        <asp:Parameter Name="original_Cost" Type="Double" />
                        <asp:Parameter Name="original_Price" Type="Double" />
                    </DeleteParameters>
                    <InsertParameters>
                        <asp:Parameter Name="Model" Type="String" />
                        <asp:Parameter Name="Serial" Type="Int32" />
                        <asp:Parameter Name="Brand" Type="String" />
                        <asp:Parameter Name="Description" Type="String" />
                        <asp:Parameter Name="Cost" Type="Double" />
                        <asp:Parameter Name="Price" Type="Double" />
                    </InsertParameters>
                    <SelectParameters>
                        <asp:ControlParameter ControlID="SearchTxt" Name="Brand" PropertyName="Text" Type="String" />
                        <asp:ControlParameter ControlID="SearchTxt" Name="Description" PropertyName="Text" Type="String" />
                        <asp:ControlParameter ControlID="SearchTxt" Name="Model" PropertyName="Text" Type="String" />
                    </SelectParameters>
                    <UpdateParameters>
                        <asp:Parameter Name="Model" Type="String" />
                        <asp:Parameter Name="Brand" Type="String" />
                        <asp:Parameter Name="Description" Type="String" />
                        <asp:Parameter Name="Cost" Type="Double" />
                        <asp:Parameter Name="Price" Type="Double" />
                        <asp:Parameter Name="original_Serial" Type="Int32" />
                        <asp:Parameter Name="original_Model" Type="String" />
                        <asp:Parameter Name="original_Brand" Type="String" />
                        <asp:Parameter Name="original_Description" Type="String" />
                        <asp:Parameter Name="original_Cost" Type="Double" />
                        <asp:Parameter Name="original_Price" Type="Double" />
                    </UpdateParameters>
                </asp:SqlDataSource>
            </div>
        </div>  
    </div>
</asp:Content>