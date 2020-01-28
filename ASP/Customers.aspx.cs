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
    public partial class Clients : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            
        }

        protected void GrdCustomers_PreRender(object sender, EventArgs e)
        {
            if (GrdCustomers.HeaderRow != null)
                GrdCustomers.HeaderRow.TableSection = TableRowSection.TableHeader;
            if (GrdIDCustomers.HeaderRow != null)
                GrdIDCustomers.HeaderRow.TableSection = TableRowSection.TableHeader;
            if (GrdAllCustomers.HeaderRow != null)
                GrdAllCustomers.HeaderRow.TableSection = TableRowSection.TableHeader;
        }

        protected void SearchIDBtn_Click(object sender, EventArgs e)
        {
            GrdAllCustomers.Visible = false;
            GrdCustomers.Visible = false;
            GrdIDCustomers.Visible = true;
            ResetBtn.Visible = true;
            SearchTxt.Text = "";
        }

        protected void SearchBtn_Click(object sender, EventArgs e)
        {
            GrdAllCustomers.Visible = false;
            GrdCustomers.Visible = true;
            GrdIDCustomers.Visible = false;
            ResetBtn.Visible = true;
            SearchIDTxt.Text = "";
        }

        protected void ResetBtn_Click(object sender, EventArgs e)
        {
            GrdAllCustomers.Visible = true;
            GrdCustomers.Visible = false;
            GrdIDCustomers.Visible = false;
            ResetBtn.Visible = false;
            SearchIDTxt.Text = "";
            SearchTxt.Text = "";
        }
    }
}