'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Notif = require('./Notif');

var _Notif2 = _interopRequireDefault(_Notif);

var getter = function getter(obj, propName) {
  return obj.get ? obj.get(propName) : obj[propName];
};

function Notifs(props) {
  var notifs = props.notifs;
  var className = props.className;
  var componentClassName = props.componentClassName;
  var CustomComponent = props.CustomComponent;
  var transitionEnterTimeout = props.transitionEnterTimeout;
  var transitionLeaveTimeout = props.transitionLeaveTimeout;
  var onActionClick = props.onActionClick;
  var action = props.action;

  var items = notifs.map(function (notif) {
    return _react2['default'].createElement(_Notif2['default'], {
      key: getter(notif, 'id'),
      message: getter(notif, 'message'),
      kind: getter(notif, 'kind'),
      componentClassName: componentClassName,
      CustomComponent: CustomComponent,
      onActionClick: onActionClick,
      action: action
    });
  });

  return _react2['default'].createElement(
    'div',
    { className: (0, _classnames2['default'])(componentClassName + '__container', className) },
    _react2['default'].createElement(
      _reactAddonsCssTransitionGroup2['default'],
      {
        transitionName: componentClassName + '-transition',
        transitionEnterTimeout: transitionEnterTimeout,
        transitionLeaveTimeout: transitionLeaveTimeout
      },
      items
    )
  );
}

Notifs.defaultProps = {
  componentClassName: 'notif',
  transitionEnterTimeout: 600,
  transitionLeaveTimeout: 600,
  onActionClick: null,
  action: null
};

Notifs.propTypes = {
  notifs: _react2['default'].PropTypes.array,
  theme: _react2['default'].PropTypes.object,
  className: _react2['default'].PropTypes.string,
  CustomComponent: _react2['default'].PropTypes.func,
  componentClassName: _react2['default'].PropTypes.string,
  transitionEnterTimeout: _react2['default'].PropTypes.number,
  transitionLeaveTimeout: _react2['default'].PropTypes.number,
  onActionClick: _react2['default'].PropTypes.func,
  action: _react2['default'].PropTypes.string
};

exports['default'] = (0, _reactRedux.connect)(function (state) {
  return { notifs: state.get ? state.get('notifs') : state.notifs };
}, {})(Notifs);
module.exports = exports['default'];