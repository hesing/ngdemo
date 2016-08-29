class HomeCtrl {
  constructor(AppConstants, User) {
    'ngInject';

    this.appName = AppConstants.appName;
    this._User = User;
    // User.get().then(res => this.users = res);
  }

  getUsers(){
  	this._User.get().then(res => this.users = res);
  }

}

export default HomeCtrl;
