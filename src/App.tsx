import React from "react";
import { Switch, Route } from "react-router-dom";
import { routes } from "./routes/routes";
import withLayout from "./hocks/withLayout";
import { compose } from "./utils/helpers";
import {
  NotFound,
  InsurancesPage,
  DeveloperInsurancesPage,
  DesignerInsurancesPage,
  DesignerBuyFlow,
  DeveloperBuyFlow,
} from "./pages";

const App = () => {
  return (
    <Switch>
      <Route path={routes.INSURANCES_PAGE} component={InsurancesPage} exact />
      <Route exact path={routes.DEVELOPER_INSURANCES_PAGE} component={DeveloperInsurancesPage} />
      <Route exact path={routes.DESIGNER_INSURANCES_PAGE} component={DesignerInsurancesPage} />
      <Route exact path={`${routes.DEVELOPER_INSURANCES_FORM}/:productId`} component={DeveloperBuyFlow} />
      <Route exact path={`${routes.DESIGNER_INSURANCES_FORM}/:productId`} component={DesignerBuyFlow} />
      <Route exact path={routes.NOT_FOUND} component={NotFound} />
    </Switch>
  );
};

export default compose(withLayout)(App);
