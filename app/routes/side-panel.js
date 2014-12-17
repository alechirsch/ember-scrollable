import Ember from 'ember';

export default Ember.Route.extend({
  viewName: 'sidePanel',

  renderTemplate: function() {
    this.render(this.routeName, {
      into: 'application',
      outlet: 'side-panel',
      view: this.viewName
    });

    this.render(this.sidePanelActionsTemplateName, {
      into: this.routeName,
      outlet: 'actions'
    });
  }
});