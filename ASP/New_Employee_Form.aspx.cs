using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace HDS1
{
    public partial class New_Employee_Form : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void SubmitBtn_Click(object sender, EventArgs e)
        {
            SqlConnection con = new SqlConnection(ConfigurationManager.ConnectionStrings["Home Design SolutionsConnectionString"].ConnectionString);
            con.Open();

            SqlCommand cmd1 = new SqlCommand("select * from [Employees] where ID = @ID", con);
            cmd1.Parameters.AddWithValue("ID", txtID.Text);
            cmd1.Connection = con;
            SqlDataReader rd = cmd1.ExecuteReader();
            if (rd.HasRows)
            {
                Label1.Visible = true;
                Label1.Text = "*ID number already exists";
                confLbl.InnerHtml = "";
            }
            else
            {
                rd.Close();
                SqlCommand cmd = new SqlCommand("INSERT INTO Employees VALUES (@ID, @Branch, @Position, @Salary, @Last, @First, @MI, @Address, @City, @State, @Zip, @Phone, @Email)", con);
                cmd.Parameters.AddWithValue("ID", txtID.Text);
                cmd.Parameters.AddWithValue("Branch", ddlBranch.Text);
                cmd.Parameters.AddWithValue("Position", txtPosition.Text);
                cmd.Parameters.AddWithValue("Salary", txtSalary.Text);
                cmd.Parameters.AddWithValue("Last", txtLast.Text);
                cmd.Parameters.AddWithValue("First", txtFirst.Text);
                cmd.Parameters.AddWithValue("MI", txtMI.Text);
                cmd.Parameters.AddWithValue("Address", txtAddress.Text);
                cmd.Parameters.AddWithValue("City", txtCity.Text);
                cmd.Parameters.AddWithValue("State", txtState.Text);
                cmd.Parameters.AddWithValue("Zip", txtZip.Text);
                cmd.Parameters.AddWithValue("Phone", txtPhone.Text);
                cmd.Parameters.AddWithValue("Email", txtEmail.Text);
                cmd.ExecuteNonQuery();

                Label1.Visible = false;
                txtID.Text = "";
                ddlBranch.SelectedValue = "-1";
                txtPosition.Text = "";
                txtSalary.Text = "";
                txtLast.Text = "";
                txtFirst.Text = "";
                txtMI.Text = "";
                txtAddress.Text = "";
                txtCity.Text = "";
                txtState.Text = "";
                txtZip.Text = "";
                txtPhone.Text = "";
                txtEmail.Text = "";
                confLbl.InnerHtml = "Submission successful";
                txtID.Focus();
            }
        }
    }
}