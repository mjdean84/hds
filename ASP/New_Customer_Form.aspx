<%@ Page Title="New Customer" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="New_Customer_Form.aspx.cs" Inherits="HDS1.New_Client_Form" %>
<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">
    <script>
        $(document).ready(function () {
            $('#clearBtn').click(function () {
                $('#<%=txtFirst.ClientID%>').val('');
                $('#<%=txtMI.ClientID%>').val('');
                $('#<%=txtLast.ClientID%>').val('');
                $('#<%=txtAddress.ClientID%>').val('');
                $('#<%=txtCity.ClientID%>').val('');
                $('#<%=txtState.ClientID%>').val('');
                $('#<%=txtZip.ClientID%>').val('');
                $('#<%=txtPhone.ClientID%>').val('');
                $('#<%=txtFirst.ClientID%>').focus();
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
            <h1 class="display-3">New Customer Form</h1>
            <a runat="server" href="~/Customers">Customer List</a><br />
            <a runat="server" href="~/Employee_Resources">Back to Resources</a>
        </div>
    </div>

        <!--Client Form-->
    <div class="container">
        <label class="text-success font-weight-bold" ID="confLbl" runat="server" Text=""></label>
        <p class="lead">Client ID will be generated automatically</p>
        <div class="row">
            <div class="col-4">
                <label for="txtFirst">First Name:</label>
                <asp:TextBox ID="txtFirst" runat="server"></asp:TextBox>
                <asp:RequiredFieldValidator CssClass="text-danger" ID="RequiredFieldValidator1" ControlToValidate="txtFirst" 
                    runat="server" ErrorMessage="*Required" Display="Dynamic"></asp:RequiredFieldValidator>
                <asp:RegularExpressionValidator CssClass="text-danger" ID="REV1" runat="server" ErrorMessage="*Only letters are allowed"
                    ControlToValidate="txtFirst" ValidationExpression="[aA-zZ ]*$" Display="Dynamic"></asp:RegularExpressionValidator>
            </div>
            <div class="col-1">
                <label for="txtMI">M.I.:</label>
                <asp:TextBox ID="txtMI" runat="server" Width="40px"></asp:TextBox>
                <asp:RegularExpressionValidator CssClass="text-danger" ID="REV2" runat="server" ErrorMessage="*1 letter"
                    ControlToValidate="txtMI" ValidationExpression="[aA-zZ]" Display="Dynamic"></asp:RegularExpressionValidator>
            </div>
            <div class="col-4">
                <label for="txtLast">Last Name:</label>
                <asp:TextBox ID="txtLast" runat="server"></asp:TextBox>
                <asp:RequiredFieldValidator CssClass="text-danger" ID="RequiredFieldValidator2" ControlToValidate="txtLast" 
                    runat="server" ErrorMessage="*Required" Display="Dynamic"></asp:RequiredFieldValidator>
                <asp:RegularExpressionValidator CssClass="text-danger" ID="REV3" runat="server" ErrorMessage="*Only letters and hyphens"
                    ControlToValidate="txtLast" ValidationExpression="[aA-zZ -]*$" Display="Dynamic"></asp:RegularExpressionValidator>
            </div>
        </div>
        <div class="row">
            <div class="col-9">
                <label for="txtAddress">Address:</label>
                <asp:TextBox ID="txtAddress" runat="server"></asp:TextBox>
                <asp:RequiredFieldValidator CssClass="text-danger" ID="RequiredFieldValidator3" ControlToValidate="txtLast" 
                    runat="server" ErrorMessage="*Required" Display="Dynamic"></asp:RequiredFieldValidator>
            </div>
        </div>
        <div class="row">
            <div class="col-4">
                <label for="txtCity">City:</label>
                <asp:TextBox ID="txtCity" runat="server"></asp:TextBox>
                <asp:RequiredFieldValidator CssClass="text-danger" ID="RequiredFieldValidator4" ControlToValidate="txtCity" 
                    runat="server" ErrorMessage="*Required" Display="Dynamic"></asp:RequiredFieldValidator>
                <asp:RegularExpressionValidator CssClass="text-danger" ID="REV4" runat="server" ErrorMessage="*Only letters are allowed"
                    ControlToValidate="txtCity" ValidationExpression="[aA-zZ ]*$" Display="Dynamic"></asp:RegularExpressionValidator>
            </div>
            <div class="col-1">
                <label for="txtState">State:</label>
                <asp:TextBox ID="txtState" runat="server"></asp:TextBox>
                <asp:RequiredFieldValidator CssClass="text-danger" ID="RequiredFieldValidator5" ControlToValidate="txtState" 
                    runat="server" ErrorMessage="*Required" Display="Dynamic"></asp:RequiredFieldValidator>
                <asp:RegularExpressionValidator CssClass="text-danger" ID="REV5" runat="server" ErrorMessage="*Valid state abbr"
                    ControlToValidate="txtState" ValidationExpression="([Aa][LKSZRAEPlkszraep]|[Cc][AOTaot]|[Dd][ECec]|[Ff][LMlm]|[Gg][AUau]|[Hh][Ii]|[Ii][ADLNadln]|[Kk][SYsy]|[Ll][Aa]|[Mm][ADEHINOPSTadehinopst]|[Nn][CDEHJMVYcdehjmvy]|[Oo][HKRhkr]|[Pp][ARWarw]|[Rr][Ii]|[Ss][CDcd]|[Tt][NXnx]|[Uu][Tt]|[Vv][AITait]|[Ww][AIVYaivy])$" 
                    Display="Dynamic"></asp:RegularExpressionValidator>
            </div>
            <div class="col-4">
                <label for="txtZip">Zip:</label>
                <asp:TextBox ID="txtZip" runat="server"></asp:TextBox>
                <asp:RequiredFieldValidator CssClass="text-danger" ID="RequiredFieldValidator6" ControlToValidate="txtZip" 
                    runat="server" ErrorMessage="*Required" Display="Dynamic"></asp:RequiredFieldValidator>
                <asp:RegularExpressionValidator ID="REV6" runat="server" CssClass="text-danger" ControlToValidate="txtZip" 
                    validationexpression="[0-9]{5}" ErrorMessage="*5 digit zip" Display="Dynamic"></asp:RegularExpressionValidator>
            </div>
        </div>
        <div class="row">
            <div class="col-4">
                <label for="txtPhone">Phone:</label>
                <asp:TextBox ID="txtPhone" runat="server"></asp:TextBox>
                <asp:RequiredFieldValidator CssClass="text-danger" ID="RFV7" ControlToValidate="txtPhone" runat="server"
                    ErrorMessage="*Required" Display="Dynamic"></asp:RequiredFieldValidator>
                <asp:RegularExpressionValidator ID="phoneREV" runat="server" CssClass="text-danger" ControlToValidate="txtPhone" 
                    validationexpression="[0-9]{3}-[0-9]{3}-[0-9]{4}" ErrorMessage="*###-###-#### format" Display="Dynamic"></asp:RegularExpressionValidator>
            </div>
        </div>
        <div class="row">
            <div class="col-9">
                <asp:Button CssClass="btn-primary my-1" ID="SubmitBtn" runat="server" Text="Submit" OnClick="SubmitBtn_Click" />
                <button type="button" class="btn-dark" id="clearBtn">Clear</button>
            </div>
        </div>
    </div>
</asp:Content>
