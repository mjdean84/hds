<%@ Page Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Employee_Resources.aspx.cs" Inherits="HDS1.Employee_Resources" Title="Employee Resources" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">
    <!--Banner-->
    <div class="jumbotron">
        <div class="container">
            <h1 class="display-3">Employee Resources</h1>
        </div>
    </div>
    
        <div class="container">
            <div class="row">
                <div class="col-4">
                    <h2><u>Admin Resources</u></h2>
                    <div class="row">
                        <div class="col-4">
                            <h4>Lists</h4>
                            <a runat="server" href="~/Customers">Customers</a><br />
                            <a runat="server" href="~/Employees">Employees</a><br />
                            <a runat="server" href="~/Inventory">Inventory</a><br />
                        </div>
                        <div class="col-8">
                            <h4>Forms</h4>
                            <a runat="server" href="~/New_Customer_Form">New Customer</a><br />
                            <a runat="server" href="~/New_Employee_Form">New Employee</a><br />
                            <a runat="server" href="~/New_Inventory_Item">New Inventory Item</a>
                        </div>
                    </div>
                </div>
                <div class="col-1"></div>
                <div class="col-5">
                    <h2><u>User Resources</u></h2>
                    <a href="HTML/reports.html">Reports</a><br />
                    <a href="HTML/forms.html">Forms</a><br />
                    <a href="Deliveries.aspx">Schedule Delivery</a><br />
                    <br />
                    <a href="PDF/Manual-Receipt.pdf" target="_blank">Manual Receipt</a><br />
                    <a href="PDF/Sample-POS-Receipt.pdf" target="_blank">Sample POS Receipt</a><br />
                    <a href="PDF/Sample-Statement.pdf" target="_blank">Sample Statement</a>
                </div>
            </div>
            <br />
            <div class="row">
            </div>
        </div>
</asp:Content>