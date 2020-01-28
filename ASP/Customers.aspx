<%@ Page Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Customers.aspx.cs" Inherits="HDS1.Clients" Title="Customers" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">
    

    <!--Banner-->
    <div class="jumbotron">
        <div class="container">
            <h1 class="display-3">Customer List</h1>
            <a runat="server" href="~/New_Customer_Form">New Customer</a><br />
            <a runat="server" href="~/Employee_Resources">Back to Resources</a>
        </div>        
    </div>


    <!--Clients Search-->
    <div class="container form-inline">
        <asp:Panel ID="Panel2" runat="server" DefaultButton="SearchIDBtn" CssClass="mr-5">
            <asp:TextBox ID="SearchIDTxt" runat="server" placeholder="ID..."></asp:TextBox>
            <asp:Button ID="SearchIDBtn" runat="server" Text="Search" OnClick="SearchIDBtn_Click" />
        </asp:Panel>
        <asp:Panel ID="Panel1" runat="server" DefaultButton="SearchBtn">
            <asp:TextBox ID="SearchTxt" runat="server" placeholder="Name, city or state..."></asp:TextBox>
            <asp:Button ID="SearchBtn" runat="server" Text="Search" OnClick="SearchBtn_Click" />
            <asp:Button ID="ResetBtn" runat="server" Text="Reset" Visible="false" OnClick="ResetBtn_Click" CssClass="btn-primary" />
        </asp:Panel>
    </div>

    <br />

    <!--All Clients-->
    <div class="col-12 table-responsive">
        <asp:GridView ID="GrdAllCustomers" runat="server" AutoGenerateColumns="False" CssClass="table table-bordered table-striped table-condensed"
            PagerStyle-HorizontalAlign="Center" PageSize="50" DataKeyNames="ID" DataSourceID="SqlDataSource2" 
            AllowPaging="True" AllowSorting="True" OnPreRender="GrdCustomers_PreRender" PagerSettings-Mode="NumericFirstLast">
            <Columns>
                <asp:CommandField ShowDeleteButton="True" ShowEditButton="True" />
                <asp:BoundField DataField="ID" HeaderText="ID" SortExpression="ID" InsertVisible="False" ReadOnly="True" />
                <asp:BoundField DataField="LastName" HeaderText="Last Name" SortExpression="LastName" ItemStyle-CssClass="text-capitalize" />
                <asp:BoundField DataField="FirstName" HeaderText="First Name" SortExpression="FirstName" ItemStyle-CssClass="text-capitalize" />
                <asp:BoundField DataField="MI" HeaderText="MI" SortExpression="MI" ItemStyle-CssClass="text-uppercase" />
                <asp:BoundField DataField="StreetAddress" HeaderText="Street Address" SortExpression="StreetAddress" ItemStyle-CssClass="text-capitalize" />
                <asp:BoundField DataField="City" HeaderText="City" SortExpression="City" ItemStyle-CssClass="text-capitalize" />
                <asp:BoundField DataField="State" HeaderText="State" SortExpression="State" ItemStyle-CssClass="text-uppercase" />
                <asp:BoundField DataField="Zip" HeaderText="Zip" SortExpression="Zip" />
                <asp:BoundField DataField="Phone" HeaderText="Phone" SortExpression="Phone" />
            </Columns>
            <PagerSettings Mode="NumericFirstLast"></PagerSettings>
            <PagerStyle HorizontalAlign="Center"></PagerStyle>
        </asp:GridView>
        <asp:SqlDataSource ID="SqlDataSource2" runat="server" ConnectionString="<%$ ConnectionStrings:Home Design SolutionsConnectionString %>" 
            SelectCommand="SELECT [ID], [LastName], [FirstName], [MI], [StreetAddress], [City], [State], [Zip], [Phone] FROM [Customers] ORDER BY [ID]" ConflictDetection="CompareAllValues" DeleteCommand="DELETE FROM [Customers] WHERE [ID] = @original_ID AND [LastName] = @original_LastName AND [FirstName] = @original_FirstName AND (([MI] = @original_MI) OR ([MI] IS NULL AND @original_MI IS NULL)) AND (([StreetAddress] = @original_StreetAddress) OR ([StreetAddress] IS NULL AND @original_StreetAddress IS NULL)) AND (([City] = @original_City) OR ([City] IS NULL AND @original_City IS NULL)) AND (([State] = @original_State) OR ([State] IS NULL AND @original_State IS NULL)) AND (([Zip] = @original_Zip) OR ([Zip] IS NULL AND @original_Zip IS NULL)) AND (([Phone] = @original_Phone) OR ([Phone] IS NULL AND @original_Phone IS NULL))" InsertCommand="INSERT INTO [Customers] ([LastName], [FirstName], [MI], [StreetAddress], [City], [State], [Zip], [Phone]) VALUES (@LastName, @FirstName, @MI, @StreetAddress, @City, @State, @Zip, @Phone)" OldValuesParameterFormatString="original_{0}" UpdateCommand="UPDATE [Customers] SET [LastName] = @LastName, [FirstName] = @FirstName, [MI] = @MI, [StreetAddress] = @StreetAddress, [City] = @City, [State] = @State, [Zip] = @Zip, [Phone] = @Phone WHERE [ID] = @original_ID AND [LastName] = @original_LastName AND [FirstName] = @original_FirstName AND (([MI] = @original_MI) OR ([MI] IS NULL AND @original_MI IS NULL)) AND (([StreetAddress] = @original_StreetAddress) OR ([StreetAddress] IS NULL AND @original_StreetAddress IS NULL)) AND (([City] = @original_City) OR ([City] IS NULL AND @original_City IS NULL)) AND (([State] = @original_State) OR ([State] IS NULL AND @original_State IS NULL)) AND (([Zip] = @original_Zip) OR ([Zip] IS NULL AND @original_Zip IS NULL)) AND (([Phone] = @original_Phone) OR ([Phone] IS NULL AND @original_Phone IS NULL))">
            <DeleteParameters>
                <asp:Parameter Name="original_ID" Type="Int32" />
                <asp:Parameter Name="original_LastName" Type="String" />
                <asp:Parameter Name="original_FirstName" Type="String" />
                <asp:Parameter Name="original_MI" Type="String" />
                <asp:Parameter Name="original_StreetAddress" Type="String" />
                <asp:Parameter Name="original_City" Type="String" />
                <asp:Parameter Name="original_State" Type="String" />
                <asp:Parameter Name="original_Zip" Type="Int32" />
                <asp:Parameter Name="original_Phone" Type="String" />
            </DeleteParameters>
            <InsertParameters>
                <asp:Parameter Name="LastName" Type="String" />
                <asp:Parameter Name="FirstName" Type="String" />
                <asp:Parameter Name="MI" Type="String" />
                <asp:Parameter Name="StreetAddress" Type="String" />
                <asp:Parameter Name="City" Type="String" />
                <asp:Parameter Name="State" Type="String" />
                <asp:Parameter Name="Zip" Type="Int32" />
                <asp:Parameter Name="Phone" Type="String" />
            </InsertParameters>
            <UpdateParameters>
                <asp:Parameter Name="LastName" Type="String" />
                <asp:Parameter Name="FirstName" Type="String" />
                <asp:Parameter Name="MI" Type="String" />
                <asp:Parameter Name="StreetAddress" Type="String" />
                <asp:Parameter Name="City" Type="String" />
                <asp:Parameter Name="State" Type="String" />
                <asp:Parameter Name="Zip" Type="Int32" />
                <asp:Parameter Name="Phone" Type="String" />
                <asp:Parameter Name="original_ID" Type="Int32" />
                <asp:Parameter Name="original_LastName" Type="String" />
                <asp:Parameter Name="original_FirstName" Type="String" />
                <asp:Parameter Name="original_MI" Type="String" />
                <asp:Parameter Name="original_StreetAddress" Type="String" />
                <asp:Parameter Name="original_City" Type="String" />
                <asp:Parameter Name="original_State" Type="String" />
                <asp:Parameter Name="original_Zip" Type="Int32" />
                <asp:Parameter Name="original_Phone" Type="String" />
            </UpdateParameters>
        </asp:SqlDataSource>
    </div>

    <!--Filtered ID Clients-->
    <div class="row">
        <div class="col-12 table-responsive">
            <asp:GridView ID="GrdIDCustomers" runat="server" DataSourceID="SqlDataSource3" CssClass="table table-bordered table-striped table-condensed" 
                Visible="false" OnPreRender="GrdCustomers_PreRender" ShowHeaderWhenEmpty="True" EmptyDataText="No records found" AutoGenerateColumns="False"
                PagerStyle-HorizontalAlign="Center" AllowPaging="True" PageSize="50" AllowSorting="True" DataKeyNames="ID" PagerSettings-Mode="NumericFirstLast">
                <Columns>
                    <asp:CommandField ShowDeleteButton="True" ShowEditButton="True" />
                    <asp:BoundField DataField="ID" HeaderText="ID" InsertVisible="False" ReadOnly="True" SortExpression="ID" />
                    <asp:BoundField DataField="LastName" HeaderText="LastName" SortExpression="LastName" />
                    <asp:BoundField DataField="FirstName" HeaderText="FirstName" SortExpression="FirstName" />
                    <asp:BoundField DataField="MI" HeaderText="MI" SortExpression="MI" />
                    <asp:BoundField DataField="StreetAddress" HeaderText="StreetAddress" SortExpression="StreetAddress" />
                    <asp:BoundField DataField="City" HeaderText="City" SortExpression="City" />
                    <asp:BoundField DataField="State" HeaderText="State" SortExpression="State" />
                    <asp:BoundField DataField="Zip" HeaderText="Zip" SortExpression="Zip" />
                </Columns>
            </asp:GridView>
            <asp:SqlDataSource ID="SqlDataSource3" runat="server" ConflictDetection="CompareAllValues" ConnectionString="<%$ ConnectionStrings:Home Design SolutionsConnectionString %>" 
                DeleteCommand="DELETE FROM [Customers] WHERE [ID] = @original_ID AND [LastName] = @original_LastName AND [FirstName] = @original_FirstName AND (([MI] = @original_MI) OR ([MI] IS NULL AND @original_MI IS NULL)) AND (([StreetAddress] = @original_StreetAddress) OR ([StreetAddress] IS NULL AND @original_StreetAddress IS NULL)) AND (([City] = @original_City) OR ([City] IS NULL AND @original_City IS NULL)) AND (([State] = @original_State) OR ([State] IS NULL AND @original_State IS NULL)) AND (([Zip] = @original_Zip) OR ([Zip] IS NULL AND @original_Zip IS NULL))" 
                InsertCommand="INSERT INTO [Customers] ([LastName], [FirstName], [MI], [StreetAddress], [City], [State], [Zip]) VALUES (@LastName, @FirstName, @MI, @StreetAddress, @City, @State, @Zip)" OldValuesParameterFormatString="original_{0}" 
                SelectCommand="SELECT [ID], [LastName], [FirstName], [MI], [StreetAddress], [City], [State], [Zip] FROM [Customers] WHERE ([ID] = @ID)" UpdateCommand="UPDATE [Customers] SET [LastName] = @LastName, [FirstName] = @FirstName, [MI] = @MI, [StreetAddress] = @StreetAddress, [City] = @City, [State] = @State, [Zip] = @Zip WHERE [ID] = @original_ID AND [LastName] = @original_LastName AND [FirstName] = @original_FirstName AND (([MI] = @original_MI) OR ([MI] IS NULL AND @original_MI IS NULL)) AND (([StreetAddress] = @original_StreetAddress) OR ([StreetAddress] IS NULL AND @original_StreetAddress IS NULL)) AND (([City] = @original_City) OR ([City] IS NULL AND @original_City IS NULL)) AND (([State] = @original_State) OR ([State] IS NULL AND @original_State IS NULL)) AND (([Zip] = @original_Zip) OR ([Zip] IS NULL AND @original_Zip IS NULL))">
                <DeleteParameters>
                    <asp:Parameter Name="original_ID" Type="Int32" />
                    <asp:Parameter Name="original_LastName" Type="String" />
                    <asp:Parameter Name="original_FirstName" Type="String" />
                    <asp:Parameter Name="original_MI" Type="String" />
                    <asp:Parameter Name="original_StreetAddress" Type="String" />
                    <asp:Parameter Name="original_City" Type="String" />
                    <asp:Parameter Name="original_State" Type="String" />
                    <asp:Parameter Name="original_Zip" Type="Int32" />
                </DeleteParameters>
                <InsertParameters>
                    <asp:Parameter Name="LastName" Type="String" />
                    <asp:Parameter Name="FirstName" Type="String" />
                    <asp:Parameter Name="MI" Type="String" />
                    <asp:Parameter Name="StreetAddress" Type="String" />
                    <asp:Parameter Name="City" Type="String" />
                    <asp:Parameter Name="State" Type="String" />
                    <asp:Parameter Name="Zip" Type="Int32" />
                </InsertParameters>
                <SelectParameters>
                    <asp:ControlParameter ControlID="SearchIDTxt" Name="ID" PropertyName="Text" Type="Int32" />
                </SelectParameters>
                <UpdateParameters>
                    <asp:Parameter Name="LastName" Type="String" />
                    <asp:Parameter Name="FirstName" Type="String" />
                    <asp:Parameter Name="MI" Type="String" />
                    <asp:Parameter Name="StreetAddress" Type="String" />
                    <asp:Parameter Name="City" Type="String" />
                    <asp:Parameter Name="State" Type="String" />
                    <asp:Parameter Name="Zip" Type="Int32" />
                    <asp:Parameter Name="original_ID" Type="Int32" />
                    <asp:Parameter Name="original_LastName" Type="String" />
                    <asp:Parameter Name="original_FirstName" Type="String" />
                    <asp:Parameter Name="original_MI" Type="String" />
                    <asp:Parameter Name="original_StreetAddress" Type="String" />
                    <asp:Parameter Name="original_City" Type="String" />
                    <asp:Parameter Name="original_State" Type="String" />
                    <asp:Parameter Name="original_Zip" Type="Int32" />
                </UpdateParameters>
            </asp:SqlDataSource>
        </div>
    </div>
        
    <!--Filtered String Clients-->
    <div class="row">
        <div class="col-12 table-responsive">
            <asp:GridView ID="GrdCustomers" runat="server" AutoGenerateColumns="False" CssClass="table table-bordered table-striped table-condensed" 
                Visible="false" DataSourceID="SqlDataSource1" OnPreRender="GrdCustomers_PreRender" ShowHeaderWhenEmpty="true" EmptyDataText="No records found"
                PagerStyle-HorizontalAlign="Center" AllowPaging="True" PageSize="50" AllowSorting="True" DataKeyNames="ID" PagerSettings-Mode="NumericFirstLast">          
                <Columns>
                    <asp:CommandField ShowDeleteButton="True" ShowEditButton="True" />
                    <asp:BoundField DataField="ID" HeaderText="ID" SortExpression="ID" InsertVisible="False" ReadOnly="True" />
                    <asp:BoundField DataField="LastName" HeaderText="LastName" SortExpression="LastName" ItemStyle-CssClass="text-capitalize" />
                    <asp:BoundField DataField="FirstName" HeaderText="FirstName" SortExpression="FirstName" ItemStyle-CssClass="text-capitalize" />
                    <asp:BoundField DataField="MI" HeaderText="MI" SortExpression="MI" ItemStyle-CssClass="text-capitalize" />
                    <asp:BoundField DataField="StreetAddress" HeaderText="StreetAddress" SortExpression="StreetAddress" ItemStyle-CssClass="text-capitalize" />
                    <asp:BoundField DataField="City" HeaderText="City" SortExpression="City" ItemStyle-CssClass="text-capitalize" />
                    <asp:BoundField DataField="State" HeaderText="State" SortExpression="State" ItemStyle-CssClass="text-uppercase" />
                    <asp:BoundField DataField="Zip" HeaderText="Zip" SortExpression="Zip" />
                </Columns>
                <PagerSettings Mode="NumericFirstLast" />
                <PagerStyle HorizontalAlign="Center" CssClass="pagerStyle"></PagerStyle>
            </asp:GridView>
            <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:Home Design SolutionsConnectionString %>" 
                SelectCommand="SELECT [ID], [LastName], [FirstName], [MI], [StreetAddress], [City], [State], [Zip] FROM [Customers] WHERE (([City] LIKE '%' + @City + '%') OR ([State] LIKE '%' + @State + '%') OR ([FirstName] LIKE '%' + @FirstName + '%') OR ([LastName] LIKE '%' + @LastName + '%')) ORDER BY [ID]" 
                OldValuesParameterFormatString="original_{0}" ConflictDetection="CompareAllValues" DeleteCommand="DELETE FROM [Customers] WHERE [ID] = @original_ID AND [LastName] = @original_LastName AND [FirstName] = @original_FirstName AND (([MI] = @original_MI) OR ([MI] IS NULL AND @original_MI IS NULL)) AND (([StreetAddress] = @original_StreetAddress) OR ([StreetAddress] IS NULL AND @original_StreetAddress IS NULL)) AND (([City] = @original_City) OR ([City] IS NULL AND @original_City IS NULL)) AND (([State] = @original_State) OR ([State] IS NULL AND @original_State IS NULL)) AND (([Zip] = @original_Zip) OR ([Zip] IS NULL AND @original_Zip IS NULL))" InsertCommand="INSERT INTO [Customers] ([LastName], [FirstName], [MI], [StreetAddress], [City], [State], [Zip]) VALUES (@LastName, @FirstName, @MI, @StreetAddress, @City, @State, @Zip)" UpdateCommand="UPDATE [Customers] SET [LastName] = @LastName, [FirstName] = @FirstName, [MI] = @MI, [StreetAddress] = @StreetAddress, [City] = @City, [State] = @State, [Zip] = @Zip WHERE [ID] = @original_ID AND [LastName] = @original_LastName AND [FirstName] = @original_FirstName AND (([MI] = @original_MI) OR ([MI] IS NULL AND @original_MI IS NULL)) AND (([StreetAddress] = @original_StreetAddress) OR ([StreetAddress] IS NULL AND @original_StreetAddress IS NULL)) AND (([City] = @original_City) OR ([City] IS NULL AND @original_City IS NULL)) AND (([State] = @original_State) OR ([State] IS NULL AND @original_State IS NULL)) AND (([Zip] = @original_Zip) OR ([Zip] IS NULL AND @original_Zip IS NULL))">
                <DeleteParameters>
                    <asp:Parameter Name="original_ID" Type="Int32" />
                    <asp:Parameter Name="original_LastName" Type="String" />
                    <asp:Parameter Name="original_FirstName" Type="String" />
                    <asp:Parameter Name="original_MI" Type="String" />
                    <asp:Parameter Name="original_StreetAddress" Type="String" />
                    <asp:Parameter Name="original_City" Type="String" />
                    <asp:Parameter Name="original_State" Type="String" />
                    <asp:Parameter Name="original_Zip" Type="Int32" />
                </DeleteParameters>
                <InsertParameters>
                    <asp:Parameter Name="LastName" Type="String" />
                    <asp:Parameter Name="FirstName" Type="String" />
                    <asp:Parameter Name="MI" Type="String" />
                    <asp:Parameter Name="StreetAddress" Type="String" />
                    <asp:Parameter Name="City" Type="String" />
                    <asp:Parameter Name="State" Type="String" />
                    <asp:Parameter Name="Zip" Type="Int32" />
                </InsertParameters>
                <SelectParameters>
                    <asp:ControlParameter ControlID="SearchTxt" Name="City" PropertyName="Text" Type="String" />
                    <asp:ControlParameter ControlID="SearchTxt" Name="State" PropertyName="Text" Type="String" />
                    <asp:ControlParameter ControlID="SearchTxt" Name="FirstName" PropertyName="Text" Type="String" />
                    <asp:ControlParameter ControlID="SearchTxt" Name="LastName" PropertyName="Text" Type="String" />
                </SelectParameters>
                <UpdateParameters>
                    <asp:Parameter Name="LastName" Type="String" />
                    <asp:Parameter Name="FirstName" Type="String" />
                    <asp:Parameter Name="MI" Type="String" />
                    <asp:Parameter Name="StreetAddress" Type="String" />
                    <asp:Parameter Name="City" Type="String" />
                    <asp:Parameter Name="State" Type="String" />
                    <asp:Parameter Name="Zip" Type="Int32" />
                    <asp:Parameter Name="original_ID" Type="Int32" />
                    <asp:Parameter Name="original_LastName" Type="String" />
                    <asp:Parameter Name="original_FirstName" Type="String" />
                    <asp:Parameter Name="original_MI" Type="String" />
                    <asp:Parameter Name="original_StreetAddress" Type="String" />
                    <asp:Parameter Name="original_City" Type="String" />
                    <asp:Parameter Name="original_State" Type="String" />
                    <asp:Parameter Name="original_Zip" Type="Int32" />
                </UpdateParameters>
            </asp:SqlDataSource>
        </div>
    </div>
</asp:Content>