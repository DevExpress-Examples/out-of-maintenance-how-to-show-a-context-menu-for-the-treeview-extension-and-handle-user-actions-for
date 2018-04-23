function treeView_OnInit(s, e) {
    ProcessNode(s.GetRootNode());
}
function ProcessNode(node) {
    var htmlElement = node.GetHtmlElement();
    var count = node.GetNodeCount();
    if (htmlElement != null) {
        var handler = function (evt) {
            popupMenu_ToggleItemsVisibility(count > 0);
            popupMenu.cpClickedNode = node;
            popupMenu.ShowAtElement(node.GetHtmlElement());
            ASPxClientUtils.PreventEventAndBubble(evt);
        };
        ASPxClientUtils.AttachEventToElement(htmlElement, "contextmenu", handler);
    }
    for (var i = 0; i < count; i++)
        ProcessNode(node.GetNode(i));
}
function popupMenu_ToggleItemsVisibility(isParent) {
    popupMenu.GetItemByName("itmExpandCollapse").SetVisible(isParent);
    popupMenu.GetItemByName("itmEnableDisable").SetVisible(!isParent);
}
function popupMenu_OnPopUp(s, e) {
    s.GetItemByName("itmExpandCollapse").SetText(s.cpClickedNode.GetExpanded() ? "Collapse" : "Expand");
    s.GetItemByName("itmEnableDisable").SetText(s.cpClickedNode.GetEnabled() ? "Disable" : "Enable");
}
function popupMenu_OnItemClick(s, e) {
    if (e.item.name == "itmExpandCollapse")
        s.cpClickedNode.SetExpanded(!s.cpClickedNode.GetExpanded());
    if (e.item.name == "itmEnableDisable")
        s.cpClickedNode.SetEnabled(!s.cpClickedNode.GetEnabled());
}