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
    public partial class New_Client_Form : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void SubmitBtn_Click(object sender, EventArgs e)
        {
            SqlConnection con = new SqlConnection(ConfigurationManager.ConnectionStrings["Home Design SolutionsConnectionString"].ConnectionString);
            con.Open();
            SqlCommand cmd = new SqlCommand("insert into Customers values (@LastName, @FirstName, @MI, @StreetAddress, @City, @State, @Zip, @Phone)", con);
            cmd.Parameters.AddWithValue("FirstName", txtLast.Text);
            cmd.Parameters.AddWithValue("MI", txtMI.Text);
            cmd.Parameters.AddWithValue("LastName", txtLast.Text);
            cmd.Parameters.AddWithValue("StreetAddress", txtAddress.Text);
            cmd.Parameters.AddWithValue("City", txtCity.Text);
            cmd.Parameters.AddWithValue("State", txtState.Text);
            cmd.Parameters.AddWithValue("Zip", txtZip.Text);
            cmd.Parameters.AddWithValue("Phone", txtPhone.Text);
            cmd.ExecuteNonQuery();

            txtFirst.Text = "";
            txtMI.Text = "";
            txtLast.Text = "";
            txtAddress.Text = "";
            txtCity.Text = "";
            txtState.Text = "";
            txtZip.Text = "";
            txtPhone.Text = "";
            confLbl.InnerHtml = "Submission successful";
            txtFirst.Focus();
        }

        protected void RequiredFieldValidator3_Load(object sender, EventArgs e)
        {

        }
    }
}