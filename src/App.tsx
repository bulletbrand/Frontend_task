import React from "react";
import { Switch, Route } from "react-router-dom";
import { routes } from "./routes/routes";
import withLayout from "./hocks/withLayout";
import { compose } from "./utils/helpers";
import {
  NotFound,
  WelcomePage,
  InsurancesPage,
  DeveloperInsurancePage,
  DesignerInsurancePage,
  DesignerBuyFlow,
  DeveloperBuyFlow,
} from "./pages";

const App = () => {
  return (
    <Switch>
      <Route path={routes.WELCOME_PAGE} component={WelcomePage} exact />
      <Route path={routes.INSURANCES_PAGE} component={InsurancesPage} />
      <Route exact path={routes.DEVELOPER_INSURANCES_PAGE} component={DeveloperInsurancePage} />
      <Route exact path={routes.DESIGNER_INSURANCES_PAGE} component={DesignerInsurancePage} />
      <Route exact path={`${routes.DEVELOPER_INSURANCES_FORM}/:productId`} component={DeveloperBuyFlow} />
      <Route exact path={`${routes.DESIGNER_INSURANCES_FORM}/:productId`} component={DesignerBuyFlow} />
      <Route exact path={routes.NOT_FOUND} component={NotFound} />
    </Switch>
  );
};

export default compose(withLayout)(App);
