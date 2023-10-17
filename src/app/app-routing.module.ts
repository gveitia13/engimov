import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('@app/pages/index/index.module').then(m => m.IndexModule)
  },
  {
    path: '', loadChildren: () => import('@app/pages/not-found/not-found.module').then(m => m.NotFoundModule)
  },
  {
    path: '',
    loadChildren: () => import('@app/pages/portfolio-product/portfolio-product.module').then(m => m.PortfolioProductModule)
  },
  {
    path: '', loadChildren: () => import('@app/pages/sale-product/sale-product.module').then(m => m.SaleProductModule)
  },
  {path: '', loadChildren: () => import('@app/pages/work-with-us/work-with-us.module').then(m => m.WorkWithUsModule)},
  {
    path: '',
    loadChildren: () => import('@app/pages/work-portfolio/work-portfolio.module').then(m => m.WorkPortfolioModule)
  },
  {path: '', loadChildren: () => import('@app/pages/terms/terms.module').then(m => m.TermsModule)},
  {path: '**', pathMatch: "full", redirectTo: '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
