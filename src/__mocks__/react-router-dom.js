import React from 'react';

import reactRouterDom from 'react-router-dom';

reactRouterDom.BrowserRouter = ({ children }) => <div>{children}</div>;

module.exports = reactRouterDom;
