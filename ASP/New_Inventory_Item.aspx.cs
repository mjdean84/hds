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
    public partial class New_Inventory_Item : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void SubmitBtn_Click(object sender, EventArgs e)
        {
            SqlConnection con = new SqlConnection(ConfigurationManager.ConnectionStrings["Home Design SolutionsConnectionString"].ConnectionString);
            con.Open();

            SqlCommand cmd1 = new SqlCommand("select * from [Inventory] where Serial = @Serial", con);
            cmd1.Parameters.AddWithValue("Serial", txtSerial.Text);
            cmd1.Connection = con;
            SqlDataReader rd = cmd1.ExecuteReader();
            if (rd.HasRows)
            {
                Label1.Visible = true;
                Label1.Text = "*Serial number already exists";
                confLbl.InnerHtml = "";
            }
            else
            {
                rd.Close();
                SqlCommand cmd = new SqlCommand("INSERT INTO Inventory VALUES (@Model, @Serial, @Brand, @Description, @Cost, @Price)", con);
                cmd.Parameters.AddWithValue("Model", txtModel.Text);
                cmd.Parameters.AddWithValue("Serial", txtSerial.Text);
                cmd.Parameters.AddWithValue("Brand", txtBrand.Text);
                cmd.Parameters.AddWithValue("Description", txtDesc.Text);
                cmd.Parameters.AddWithValue("Cost", txtCost.Text);
                cmd.Parameters.AddWithValue("Price", txtPrice.Text);
                cmd.ExecuteNonQuery();

                Label1.Visible = false;
                txtModel.Text = "";
                txtSerial.Text = "";
                txtBrand.Text = "";
                txtDesc.Text = "";
                txtCost.Text = "";
                txtPrice.Text = "";
                confLbl.InnerHtml = "Submission successful";
                txtModel.Focus();
            }
        }
    }
}