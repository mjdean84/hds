<%@ Page Title="New Inventory Item" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="New_Inventory_Item.aspx.cs" Inherits="HDS1.New_Inventory_Item" %>
<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">
    <script>
        $(document).ready(function () {
            $('#clearBtn').click(function () {
                $('#<%=txtModel.ClientID%>').val('');
                $('#<%=txtSerial.ClientID%>').val('');
                $('#<%=txtBrand.ClientID%>').val('');
                $('#<%=txtDesc.ClientID%>').val('');
                $('#<%=txtCost.ClientID%>').val('');
                $('#<%=txtPrice.ClientID%>').val('');
                $('#<%=Label1.ClientID%>').css('visibility', 'hidden');
            })
        })

        $(document).ready(function () {
            $('form input').addClass('form-control');
            $('form textarea').addClass('form-control');
            $('form button').addClass('btn btn-block');
            $('form div').addClass('my-1');
        })
    </script>
    
    <div class="jumbotron">
        <div class="container">
            <h1 class="display-3">New Inventory Item Form</h1>
            <a href="~/Inventory.aspx" runat="server">Inventory List</a><br />
            <a href="~/Employee_Resources" runat="server">Back to Resources</a>
        </div> 
    </div>

    <div class="container">
        <label class="text-success font-weight-bold" ID="confLbl" runat="server" Text=""></label>
        <div class="row">
            <div class="col-3">
                <label for="txtModel">Model #:</label>
                <asp:TextBox ID="txtModel" runat="server"></asp:TextBox>
                <asp:RequiredFieldValidator CssClass="text-danger" ID="modelRFV" ControlToValidate="txtModel" 
                    runat="server" ErrorMessage="*Required" Display="Dynamic"></asp:RequiredFieldValidator>
            </div>
            <div class="col-3">
                <label for="txtSerial">Serial #:</label>
                <asp:TextBox ID="txtSerial" runat="server"></asp:TextBox>
                <asp:Label CssClass="text-danger" ID="Label1" runat="server" Visible="False"></asp:Label>
                <asp:CompareValidator CssClass="text-danger" ID="CompareValidator1" runat="server" Operator="DataTypeCheck" 
                    Type="Integer" ControlToValidate="txtSerial" ErrorMessage="*Must be a number" Display="Dynamic"></asp:CompareValidator>
                <asp:RequiredFieldValidator CssClass="text-danger" ID="serialRFV" ControlToValidate="txtSerial" runat="server" 
                    ErrorMessage="*Required" Display="Dynamic"></asp:RequiredFieldValidator>
            </div>
            <div class="col-3">
                <label for="txtBrand">Brand:</label>
                <asp:TextBox ID="txtBrand" runat="server"></asp:TextBox>
                <asp:RequiredFieldValidator CssClass="text-danger" ID="brandRFV" ControlToValidate="txtBrand" runat="server" 
                    ErrorMessage="*Required" Display="Dynamic"></asp:RequiredFieldValidator>
            </div>
        </div>
        <div class="row">
            <div class="col-9">
                <label for="txtDesc">Description:</label>
                <asp:TextBox ID="txtDesc" runat="server"></asp:TextBox>
                <asp:RequiredFieldValidator CssClass="text-danger" ID="descRFV" ControlToValidate="txtDesc" runat="server" 
                    ErrorMessage="*Required" Display="Dynamic"></asp:RequiredFieldValidator>
            </div>
        </div>
        <div class="row">
            <div class="col-3">
                <label for="txtCost">Cost:</label>
                <asp:TextBox ID="txtCost" runat="server"></asp:TextBox>
                <asp:CompareValidator CssClass="text-danger" ID="CompareValidator2" runat="server" Operator="DataTypeCheck" 
                    Type="Integer" ControlToValidate="txtCost" ErrorMessage="*Must be a number" Display="Dynamic"></asp:CompareValidator>
                <asp:RequiredFieldValidator CssClass="text-danger" ID="costRFV" ControlToValidate="txtCost" runat="server" 
                    ErrorMessage="*Required" Display="Dynamic"></asp:RequiredFieldValidator>
            </div>
            <div class="col-3">
                <label for="txtPrice">List Price:</label>
                <asp:TextBox ID="txtPrice" runat="server"></asp:TextBox>
                <asp:CompareValidator CssClass="text-danger" ID="CompareValidator3" runat="server" Operator="DataTypeCheck" 
                    Type="Integer" ControlToValidate="txtPrice" ErrorMessage="*Must be a number" Display="Dynamic"></asp:CompareValidator>
                <asp:RequiredFieldValidator CssClass="text-danger" ID="priceRFV" ControlToValidate="txtPrice" runat="server" 
                    ErrorMessage="*Required" Display="Dynamic"></asp:RequiredFieldValidator>
            </div>
        </div>
        <div class="row">
            <div class="col-9">
                <asp:Button CssClass="btn btn-primary my-1" ID="SubmitBtn" runat="server" Text="Submit" OnClick="SubmitBtn_Click" />
                <button type="button" class="btn-dark" id="clearBtn">Clear</button>
            </div>
        </div>
    </div>
</asp:Content>
