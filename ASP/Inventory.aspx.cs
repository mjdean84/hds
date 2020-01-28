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
    public partial class Inventory : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void GrdInventory_PreRender(object sender, EventArgs e)
        {
            if (GrdFiltInventory.HeaderRow != null)
                GrdFiltInventory.HeaderRow.TableSection = TableRowSection.TableHeader;
            if (GrdAllInventory.HeaderRow != null)
                GrdAllInventory.HeaderRow.TableSection = TableRowSection.TableHeader;
            if (GrdSerialInventory.HeaderRow != null)
                GrdSerialInventory.HeaderRow.TableSection = TableRowSection.TableHeader;
        }

        protected void SerialBtn_Click(object sender, EventArgs e)
        {
            GrdAllInventory.Visible = false;
            GrdSerialInventory.Visible = true;
            GrdFiltInventory.Visible = false;
            ResetBtn.Visible = true;
        }

        protected void SearchBtn_Click(object sender, EventArgs e)
        {
            GrdAllInventory.Visible = false;
            GrdSerialInventory.Visible = false;
            GrdFiltInventory.Visible = true;
            ResetBtn.Visible = true;
        }

        protected void ResetBtn_Click(object sender, EventArgs e)
        {
            GrdAllInventory.Visible = true;
            GrdSerialInventory.Visible = false;
            GrdFiltInventory.Visible = false;
            ResetBtn.Visible=false;
            SearchTxt.Text = "";
            SerialTxt.Text = "";
        }
    }
}