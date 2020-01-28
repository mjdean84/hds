<%@ Page Title="New Employee" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="New_Employee_Form.aspx.cs" Inherits="HDS1.New_Employee_Form" %>
<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">
    <script>
        $(document).ready(function () {
            $('#clearBtn').click(function () {
                $('#<%=txtID.ClientID%>').val('');
                $('#<%=ddlBranch.ClientID%>').val('-1');
                $('#<%=txtPosition.ClientID%>').val('');
                $('#<%=txtSalary.ClientID%>').val('');
                $('#<%=txtLast.ClientID%>').val('');
                $('#<%=txtFirst.ClientID%>').val('');
                $('#<%=txtMI.ClientID%>').val('');
                $('#<%=txtAddress.ClientID%>').val('');
                $('#<%=txtCity.ClientID%>').val('');
                $('#<%=txtState.ClientID%>').val('');
                $('#<%=txtZip.ClientID%>').val('');
                $('#<%=txtPhone.ClientID%>').val('');
                $('#<%=txtEmail.ClientID%>').val('');
                $('#<%=txtID.ClientID%>').focus();
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
            <h1 class="display-3">New Employee Form</h1>
            <a runat="server" href="~/Employees">Employee List</a><br />
            <a runat="server" href="~/Employee_Resources">Back to Resources</a>
        </div>
    </div>

    <div class="container">
        <label class="text-success font-weight-bold" ID="confLbl" runat="server" Text=""></label>
        <div class="row">
            <div class="col-2">
                <label for="txtID">ID:</label>
                <asp:TextBox ID="txtID" runat="server"></asp:TextBox>
                <asp:Label CssClass="text-danger" ID="Label1" runat="server" Visible="False"></asp:Label>
                <asp:RegularExpressionValidator ID="REV1" runat="server" CssClass="text-danger" ControlToValidate="txtID" 
                    validationexpression="[0-9]{6}" ErrorMessage="*6 digit ID" Display="Dynamic"></asp:RegularExpressionValidator>
                <asp:RequiredFieldValidator CssClass="text-danger" ID="idRFV" ControlToValidate="txtID" 
                    runat="server" ErrorMessage="*Required" Display="Dynamic"></asp:RequiredFieldValidator>
                </div>
            <div class="col-2">
                <label for="ddlBranch">Branch:</label>
                <asp:DropDownList CssClass="form-control" ID="ddlBranch" runat="server">
                    <asp:ListItem Text="-Select one-" Value="-1"></asp:ListItem>
                    <asp:ListItem>Albuquerque</asp:ListItem>
                    <asp:ListItem>Las Vegas</asp:ListItem>
                    <asp:ListItem>Phoenix</asp:ListItem>
                    <asp:ListItem>Scottsdale</asp:ListItem>
                    <asp:ListItem>Tucson</asp:ListItem>
                </asp:DropDownList>
                <asp:RequiredFieldValidator CssClass="text-danger" ID="branchRFV" ControlToValidate="ddlBranch" 
                    runat="server" ErrorMessage="*Required" InitialValue="-1" Display="Dynamic"></asp:RequiredFieldValidator>
            </div>
            <div class="col-2">
                <label for="txtSalary">Salary:</label>
                <asp:TextBox ID="txtSalary" runat="server"></asp:TextBox>
                <asp:CompareValidator CssClass="text-danger" ID="CompareValidator2" runat="server" Operator="DataTypeCheck" 
                    Type="Integer" ControlToValidate="txtSalary" ErrorMessage="*Must be a number" Display="Dynamic"></asp:CompareValidator>
            </div>
            <div class="col-3">
                <label for="txtPosition">Position:</label>
                <asp:TextBox ID="txtPosition" runat="server"></asp:TextBox>
                <asp:RequiredFieldValidator CssClass="text-danger" ID="positionRFV" ControlToValidate="txtPosition" 
                    runat="server" ErrorMessage="*Required" Display="Dynamic"></asp:RequiredFieldValidator>
            </div>
        </div>
            
        <div class="row">
            <div class="col-4">
                <label for="txtFirst">First Name:</label>
                <asp:TextBox ID="txtFirst" runat="server"></asp:TextBox>
                <asp:RequiredFieldValidator CssClass="text-danger" ID="fNameRFV" ControlToValidate="txtFirst" 
                    runat="server" ErrorMessage="*Required" Display="Dynamic"></asp:RequiredFieldValidator>
                <asp:RegularExpressionValidator ID="REV2" runat="server" CssClass="text-danger" ControlToValidate="txtFirst" 
                    validationexpression="[aA-zZ]*$" ErrorMessage="*Valid name" Display="Dynamic"></asp:RegularExpressionValidator>
            </div>
            <div class="col-1">
                <label for="txtMI">M.I.:</label>
                <asp:TextBox ID="txtMI" runat="server"></asp:TextBox>
                <asp:RegularExpressionValidator CssClass="text-danger" ID="REV3" runat="server" ErrorMessage="*1 letter"
                    ControlToValidate="txtMI" ValidationExpression="[aA-zZ]" Display="Dynamic"></asp:RegularExpressionValidator>
            </div>
            <div class="col-4">
                <label for="txtLast">Last Name:</label>
                <asp:TextBox ID="txtLast" runat="server"></asp:TextBox>
                <asp:RequiredFieldValidator CssClass="text-danger" ID="lNameRFV" ControlToValidate="txtLast" 
                    runat="server" ErrorMessage="*Required" Display="Dynamic"></asp:RequiredFieldValidator>
                <asp:RegularExpressionValidator CssClass="text-danger" ID="REV4" runat="server" ErrorMessage="*Only letters and hyphens"
                    ControlToValidate="txtLast" ValidationExpression="[aA-zZ -]*$" Display="Dynamic"></asp:RegularExpressionValidator>
            </div>
        </div>
        
        <div class="row">
            <div class="col-9">
                <label for="txtAddress">Street Address</label>
                <asp:TextBox ID="txtAddress" runat="server"></asp:TextBox>
                <asp:RequiredFieldValidator CssClass="text-danger" ID="addRFV" ControlToValidate="txtAddress" 
                    runat="server" ErrorMessage="*Required" Display="Dynamic"></asp:RequiredFieldValidator>
            </div>
        </div>

        <div class="row">
            <div class="col-4">
                <label for="txtCity">City:</label>
                <asp:TextBox ID="txtCity" runat="server"></asp:TextBox>
                <asp:RequiredFieldValidator CssClass="text-danger" ID="cityRFV" ControlToValidate="txtCity" 
                    runat="server" ErrorMessage="*Required" Display="Dynamic"></asp:RequiredFieldValidator>
                <asp:RegularExpressionValidator CssClass="text-danger" ID="cityREV" runat="server" ErrorMessage="*Only letters are allowed"
                    ControlToValidate="txtCity" ValidationExpression="[aA-zZ ]*$" Display="Dynamic"></asp:RegularExpressionValidator>
            </div>
            <div class="col-1">
                <label for="txtState">State:</label>
                <asp:TextBox ID="txtState" runat="server"></asp:TextBox>
                <asp:RequiredFieldValidator CssClass="text-danger" ID="stateRFV" ControlToValidate="txtState" 
                    runat="server" ErrorMessage="*Required" Display="Dynamic"></asp:RequiredFieldValidator>
                <asp:RegularExpressionValidator CssClass="text-danger" ID="stateREV" runat="server" ErrorMessage="*Valid state abbr"
                    ControlToValidate="txtState" ValidationExpression="([Aa][LKSZRAEPlkszraep]|[Cc][AOTaot]|[Dd][ECec]|[Ff][LMlm]|[Gg][AUau]|[Hh][Ii]|[Ii][ADLNadln]|[Kk][SYsy]|[Ll][Aa]|[Mm][ADEHINOPSTadehinopst]|[Nn][CDEHJMVYcdehjmvy]|[Oo][HKRhkr]|[Pp][ARWarw]|[Rr][Ii]|[Ss][CDcd]|[Tt][NXnx]|[Uu][Tt]|[Vv][AITait]|[Ww][AIVYaivy])$" 
                    Display="Dynamic"></asp:RegularExpressionValidator>
            </div>
            <div class="col-4">
                <label for="txtZip">Zip:</label>
                <asp:TextBox ID="txtZip" runat="server"></asp:TextBox>
                <asp:RequiredFieldValidator CssClass="text-danger" ID="zipRFV" ControlToValidate="txtZip" 
                    runat="server" ErrorMessage="*Required" Display="Dynamic"></asp:RequiredFieldValidator>
                <asp:RegularExpressionValidator ID="zipREV" runat="server" ControlToValidate="txtZip" CssClass="text-danger"
                    validationexpression="^[0-9]{5}$" ErrorMessage="*Must be 5 digit number" Display="Dynamic"></asp:RegularExpressionValidator>
            </div>
        </div>

        <div class="row">
            <div class="col-3">
                <label for="txtPhone">Phone:</label>
                <asp:TextBox ID="txtPhone" runat="server"></asp:TextBox>
                <asp:RequiredFieldValidator CssClass="text-danger" ID="phoneRFV" ControlToValidate="txtPhone" 
                    runat="server" ErrorMessage="*Required" Display="Dynamic"></asp:RequiredFieldValidator>
                <asp:RegularExpressionValidator ID="phoneREV" runat="server" CssClass="text-danger" ControlToValidate="txtPhone" 
                    validationexpression="[0-9]{3}-[0-9]{3}-[0-9]{4}" ErrorMessage="*###-###-#### format" Display="Dynamic"></asp:RegularExpressionValidator>
            </div>
            <div class="col-6">
                <label for="txtEmail">Email:</label>
                <asp:TextBox ID="txtEmail" runat="server"></asp:TextBox>
                <asp:RequiredFieldValidator CssClass="text-danger" ID="emailRFV" ControlToValidate="txtEmail" 
                    runat="server" ErrorMessage="*Required" Display="Dynamic"></asp:RequiredFieldValidator>
                <asp:RegularExpressionValidator ID="emailREV" runat="server" CssClass="text-danger" ControlToValidate="txtEmail" 
                    validationexpression="[a-z0-9]+([-+._][a-z0-9]+){0,2}@.*?(\.(a(?:[cdefgilmnoqrstuwxz]|ero|(?:rp|si)a)|b(?:[abdefghijmnorstvwyz]iz)|c(?:[acdfghiklmnoruvxyz]|at|o(?:m|op))|d[ejkmoz]|e(?:[ceghrstu]|du)|f[ijkmor]|g(?:[abdefghilmnpqrstuwy]|ov)|h[kmnrtu]|i(?:[delmnoqrst]|n(?:fo|t))|j(?:[emop]|obs)|k[eghimnprwyz]|l[abcikrstuvy]|m(?:[acdeghklmnopqrstuvwxyz]|il|obi|useum)|n(?:[acefgilopruz]|ame|et)|o(?:m|rg)|p(?:[aefghklmnrstwy]|ro)|qa|r[eosuw]|s[abcdeghijklmnortuvyz]|t(?:[cdfghjklmnoprtvwz]|(?:rav)?el)|u[agkmsyz]|v[aceginu]|w[fs]|y[etu]|z[amw])\b){1,2}" 
                    ErrorMessage="*Valid email required" Display="Dynamic"></asp:RegularExpressionValidator>
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
