class SidebarCtrl{
	toggleItem(){
		console.log("Herer I am");
	}
}

let Sidebar = {
  bindings: {
    toggled: '='
  },
  templateUrl: 'components/sidebar/sidebar.html',
  controller: SidebarCtrl
};

export default Sidebar;