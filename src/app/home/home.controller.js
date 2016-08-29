class HomeCtrl {
  constructor(AppConstants, User) {
    'ngInject';

    this.appName = AppConstants.appName;
    User.get().then(res => this.users = res);
  }

}

export default HomeCtrl;
