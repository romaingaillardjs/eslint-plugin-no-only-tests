module.exports = {
  meta: {
    docs: {}
  },

  create: function(context) {
    var regex = /^(describe|it)$/;

    return {
      Identifier: function(node) {
        if (node.name === 'skip' && regex.test(node.parent.object.name)) {
          context.report(node, node.parent.object.name + '.skip not permitted');
        }
      }
    }
  }
};
