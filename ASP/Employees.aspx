<%@ Page Title="Employees" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Employees.aspx.cs" Inherits="HDS1.Images.Employees" %>
<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">
    <!--Banner-->
    <div class="jumbotron">
        <div class="container">
            <h1 class="display-3">Employees</h1>
            <a href="~/New_Employee_Form" runat="server">New Employee</a><br />
            <a href="~/Employee_Resources" runat="server">Back to Resources</a>
        </div>
    </div>

    <!--Employee Data-->
    <div class="row">
        <div class="col-12 table-responsive">
            <asp:GridView ID="GrdEmployees" CssClass="table table-bordered table-striped table-condensed"  runat="server" AllowPaging="True" 
                AllowSorting="True" AutoGenerateColumns="False" DataKeyNames="ID" DataSourceID="SqlDataSource1" OnPreRender="GrdEmployees_PreRender" 
                PagerStyle-HorizontalAlign="Center" PageSize="20">
                <Columns>
                    <asp:CommandField ShowDeleteButton="True" ShowEditButton="True" />
                    <asp:BoundField DataField="ID" HeaderText="ID" ReadOnly="True" SortExpression="ID" />
                    <asp:BoundField DataField="Branch" HeaderText="Branch" SortExpression="Branch"  ItemStyle-CssClass="text-capitalize" />
                    <asp:BoundField DataField="Position" HeaderText="Position" SortExpression="Position"  ItemStyle-CssClass="text-capitalize" />
                    <asp:BoundField DataField="Salary" HeaderText="Salary" SortExpression="Salary"  ItemStyle-CssClass="text-capitalize" />
                    <asp:BoundField DataField="Last" HeaderText="Last" SortExpression="Last"  ItemStyle-CssClass="text-capitalize" />
                    <asp:BoundField DataField="First" HeaderText="First" SortExpression="First" />
                    <asp:BoundField DataField="MI" HeaderText="MI" SortExpression="MI" />
                    <asp:BoundField DataField="Address" HeaderText="Address" SortExpression="Address" />
                    <asp:BoundField DataField="City" HeaderText="City" SortExpression="City" />
                    <asp:BoundField DataField="State" HeaderText="State" SortExpression="State" />
                    <asp:BoundField DataField="Zip" HeaderText="Zip" SortExpression="Zip" />
                    <asp:BoundField DataField="Phone" HeaderText="Phone" SortExpression="Phone" />
                    <asp:BoundField DataField="Email" HeaderText="Email" SortExpression="Email" />
                </Columns>

<PagerStyle HorizontalAlign="Center"></PagerStyle>
            </asp:GridView>
            <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConflictDetection="CompareAllValues" ConnectionString="<%$ ConnectionStrings:Home Design SolutionsConnectionString %>" DeleteCommand="DELETE FROM [Employees] WHERE [ID] = @original_ID AND (([Branch] = @original_Branch) OR ([Branch] IS NULL AND @original_Branch IS NULL)) AND (([Position] = @original_Position) OR ([Position] IS NULL AND @original_Position IS NULL)) AND (([Salary] = @original_Salary) OR ([Salary] IS NULL AND @original_Salary IS NULL)) AND (([Last] = @original_Last) OR ([Last] IS NULL AND @original_Last IS NULL)) AND (([First] = @original_First) OR ([First] IS NULL AND @original_First IS NULL)) AND (([MI] = @original_MI) OR ([MI] IS NULL AND @original_MI IS NULL)) AND (([Address] = @original_Address) OR ([Address] IS NULL AND @original_Address IS NULL)) AND (([City] = @original_City) OR ([City] IS NULL AND @original_City IS NULL)) AND (([State] = @original_State) OR ([State] IS NULL AND @original_State IS NULL)) AND (([Zip] = @original_Zip) OR ([Zip] IS NULL AND @original_Zip IS NULL)) AND (([Phone] = @original_Phone) OR ([Phone] IS NULL AND @original_Phone IS NULL)) AND (([Email] = @original_Email) OR ([Email] IS NULL AND @original_Email IS NULL))" InsertCommand="INSERT INTO [Employees] ([ID], [Branch], [Position], [Salary], [Last], [First], [MI], [Address], [City], [State], [Zip], [Phone], [Email]) VALUES (@ID, @Branch, @Position, @Salary, @Last, @First, @MI, @Address, @City, @State, @Zip, @Phone, @Email)" OldValuesParameterFormatString="original_{0}" SelectCommand="SELECT * FROM [Employees] ORDER BY [ID]" UpdateCommand="UPDATE [Employees] SET [Branch] = @Branch, [Position] = @Position, [Salary] = @Salary, [Last] = @Last, [First] = @First, [MI] = @MI, [Address] = @Address, [City] = @City, [State] = @State, [Zip] = @Zip, [Phone] = @Phone, [Email] = @Email WHERE [ID] = @original_ID AND (([Branch] = @original_Branch) OR ([Branch] IS NULL AND @original_Branch IS NULL)) AND (([Position] = @original_Position) OR ([Position] IS NULL AND @original_Position IS NULL)) AND (([Salary] = @original_Salary) OR ([Salary] IS NULL AND @original_Salary IS NULL)) AND (([Last] = @original_Last) OR ([Last] IS NULL AND @original_Last IS NULL)) AND (([First] = @original_First) OR ([First] IS NULL AND @original_First IS NULL)) AND (([MI] = @original_MI) OR ([MI] IS NULL AND @original_MI IS NULL)) AND (([Address] = @original_Address) OR ([Address] IS NULL AND @original_Address IS NULL)) AND (([City] = @original_City) OR ([City] IS NULL AND @original_City IS NULL)) AND (([State] = @original_State) OR ([State] IS NULL AND @original_State IS NULL)) AND (([Zip] = @original_Zip) OR ([Zip] IS NULL AND @original_Zip IS NULL)) AND (([Phone] = @original_Phone) OR ([Phone] IS NULL AND @original_Phone IS NULL)) AND (([Email] = @original_Email) OR ([Email] IS NULL AND @original_Email IS NULL))">
                <DeleteParameters>
                    <asp:Parameter Name="original_ID" Type="Double" />
                    <asp:Parameter Name="original_Branch" Type="String" />
                    <asp:Parameter Name="original_Position" Type="String" />
                    <asp:Parameter Name="original_Salary" Type="Double" />
                    <asp:Parameter Name="original_Last" Type="String" />
                    <asp:Parameter Name="original_First" Type="String" />
                    <asp:Parameter Name="original_MI" Type="String" />
                    <asp:Parameter Name="original_Address" Type="String" />
                    <asp:Parameter Name="original_City" Type="String" />
                    <asp:Parameter Name="original_State" Type="String" />
                    <asp:Parameter Name="original_Zip" Type="Double" />
                    <asp:Parameter Name="original_Phone" Type="String" />
                    <asp:Parameter Name="original_Email" Type="String" />
                </DeleteParameters>
                <InsertParameters>
                    <asp:Parameter Name="ID" Type="Double" />
                    <asp:Parameter Name="Branch" Type="String" />
                    <asp:Parameter Name="Position" Type="String" />
                    <asp:Parameter Name="Salary" Type="Double" />
                    <asp:Parameter Name="Last" Type="String" />
                    <asp:Parameter Name="First" Type="String" />
                    <asp:Parameter Name="MI" Type="String" />
                    <asp:Parameter Name="Address" Type="String" />
                    <asp:Parameter Name="City" Type="String" />
                    <asp:Parameter Name="State" Type="String" />
                    <asp:Parameter Name="Zip" Type="Double" />
                    <asp:Parameter Name="Phone" Type="String" />
                    <asp:Parameter Name="Email" Type="String" />
                </InsertParameters>
                <UpdateParameters>
                    <asp:Parameter Name="Branch" Type="String" />
                    <asp:Parameter Name="Position" Type="String" />
                    <asp:Parameter Name="Salary" Type="Double" />
                    <asp:Parameter Name="Last" Type="String" />
                    <asp:Parameter Name="First" Type="String" />
                    <asp:Parameter Name="MI" Type="String" />
                    <asp:Parameter Name="Address" Type="String" />
                    <asp:Parameter Name="City" Type="String" />
                    <asp:Parameter Name="State" Type="String" />
                    <asp:Parameter Name="Zip" Type="Double" />
                    <asp:Parameter Name="Phone" Type="String" />
                    <asp:Parameter Name="Email" Type="String" />
                    <asp:Parameter Name="original_ID" Type="Double" />
                    <asp:Parameter Name="original_Branch" Type="String" />
                    <asp:Parameter Name="original_Position" Type="String" />
                    <asp:Parameter Name="original_Salary" Type="Double" />
                    <asp:Parameter Name="original_Last" Type="String" />
                    <asp:Parameter Name="original_First" Type="String" />
                    <asp:Parameter Name="original_MI" Type="String" />
                    <asp:Parameter Name="original_Address" Type="String" />
                    <asp:Parameter Name="original_City" Type="String" />
                    <asp:Parameter Name="original_State" Type="String" />
                    <asp:Parameter Name="original_Zip" Type="Double" />
                    <asp:Parameter Name="original_Phone" Type="String" />
                    <asp:Parameter Name="original_Email" Type="String" />
                </UpdateParameters>
            </asp:SqlDataSource>
        </div>
    </div>
</asp:Content>
