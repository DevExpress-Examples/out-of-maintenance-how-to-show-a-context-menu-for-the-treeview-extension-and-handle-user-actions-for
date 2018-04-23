@Code
    ViewBag.Title = "How to show a context menu for the TreeView extension and handle user actions for different nodes"
    Layout = "~/Views/Shared/_Layout.vbhtml"
End Code

@Html.DevExpress().TreeView(
    Sub(settings)
            settings.Name = "treeView"
            settings.ClientSideEvents.Init = "treeView_OnInit"
    End Sub).BindToSiteMap("~/App_Data/Feature.sitemap", False).GetHtml()

@Html.DevExpress().PopupMenu(
    Sub(settings)
            settings.Name = "popupMenu"
            Dim item As MVCxMenuItem = settings.Items.Add()
            item.Name = "itmExpandCollapse"
            item.Text = "Expand"
            item = settings.Items.Add()
            item.Name = "itmEnableDisable"
            item.Text = "Enable"
            settings.ClientSideEvents.PopUp = "popupMenu_OnPopUp"
            settings.ClientSideEvents.ItemClick = "popupMenu_OnItemClick"
    End Sub).GetHtml()