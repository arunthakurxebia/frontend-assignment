# PeachtreeBank : Frontend Technical Assignment

A simple application to mock money transfer.

## Assumptions
Below mentioned points are assumed to develop this application

- Mock json file used for the transaction list.
- Fontawesom icon library is used for icons.
- Out-of-box components are never manipulated.
- Year is added in date format to avoid confusion.
- A global loader is added to show loader on all API calls.
- Amount field accepts value only upto two decimals.
- All web components are responsive, width may vary as per screen resolution.
- Review modal won't be closed clicking outside.

## Setup environment
Below frameworks and apps must be installed on your local machine to run this application

- #### nodejs
- #### angular
- #### browser
- #### git (if using git clone to download code)

Use **download zip** option or use `git clone https://github.com/arunthakurxebia/frontend-assignment.git` on terminal to get the application code on local machine. 

## Run development server

- Extract the .zip file if downloaded code using **download zip** option, if cloned code using **git clone** go to the next step.
- Open terminal and navigate the cloned repo (frontend-assignment).
- Navigate to root folder of the application (root folder contains package.json), use `cd peachtree-bank`.
- Run `npm install` to install all the dependencies.
- Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
- Live app running : https://arunthakurxebia.github.io/

peachtree-bank --> Project directory                                                                                                                               
    ├── angular.json --> Angular configuration file                                                                                                               
    ├── browserslist --> To adjust CSS and JS for specified browsers                                                                                               
    ├── e2e --> end to end test case folder                                                                                                                       
    │   ├── protractor.conf.js --> protctor framework configuration                                                                                               
    │   ├── src --> e2e root folder                                                                                                                               
    │   │   ├── app.e2e-spec.ts --> spec for e2e test cases                                                                                                       
    │   │   └── app.po.ts --> e2e page Object Class                                                                                                               
    │   └── tsconfig.json --> typescript configuration file                                                                                                       
    ├── karma.conf.js --> Karma unit testing config file                                                                                                           
    ├── package.json --> npm project dependecies file                                                                                                             
    ├── package-lock.json --> Automatically generated when node modules or package.json modifies.                                                                 
    ├── proxy.conf.json --> Proxy conifguration file to map url to specified server                                                                               
    ├── README.md --> Contains project overview                                                                                                                   
    ├── src --> Root folder                                                                                                                                      
    │   ├── app --> Contains all feature development code, parent component for all feature components                                                             
    │   │   ├── app.component.html --> html code for app component												
    │   │   ├── app.component.scss --> style for app component 													
    │   │   ├── app.component.spec.ts --> unit tests for app component												
    │   │   ├── app.component.ts --> functions and events for app components											
    │   │   ├── app.module.ts																	
    │   │   ├── custom-components --> Contains custom components												
    │   │   │   ├── loader --> Component to show loader icon on api calls											
    │   │   │   │   ├── loader.component.html --> html code for loader icon											
    │   │   │   │   ├── loader.component.scss --> styling for loader icon											
    │   │   │   │   ├── loader.component.spec.ts --> unit test cases												
    │   │   │   │   └── loader.component.ts --> functions and events for loader											
    │   │   │   ├── review-modal --> Review modal component to show transaction summary before submission							
    │   │   │   │   ├── review-modal.component.html --> html code for review modal 										
    │   │   │   │   ├── review-modal.component.scss --> styling for review modal										
    │   │   │   │   ├── review-modal.component.spec.ts --> unit test cases											
    │   │   │   │   └── review-modal.component.ts --> functions and events for review modal									
    │   │   │   ├── transaction-list --> Component for transaction history											
    │   │   │   │   ├── transaction-list.component.html --> html code for transaction list									
    │   │   │   │   ├── transaction-list.component.scss --> styling for transaction list									
    │   │   │   │   ├── transaction-list.component.spec.ts --> unit test cases for transaction list								
    │   │   │   │   └── transaction-list.component.ts --> functions and events for transaction list
    │   │   │   └── transfer-money-form --> Component form to transfer money from one account to another							
    │   │   │       ├── transfer-money-form.component.html --> html code for transfer money from								
    │   │   │       ├── transfer-money-form.component.scss --> styling for transfer money from									
    │   │   │       ├── transfer-money-form.component.spec.ts --> unit test cases for transfer money from							
    │   │   │       └── transfer-money-form.component.ts --> functions and events for transfer money from							
    │   │   ├── directives --> Directive to format amount field text to specific format										
    │   │   │   ├── amount.directive.spec.ts --> unit test case for amount directive										
    │   │   │   └── amount.directive.ts --> function to format amount value											
    │   │   ├── filter___________________________														
    │   │   │   ├── filter.component.html        |														
    │   │   │   ├── filter.component.scss        |==== Out of box component											
    │   │   │   ├── filter.component.spec.ts     |														
    │   │   │   └── filter.component.ts__________|														
    │   │   ├── footer____________________________														
    │   │   │   ├── footer.component.html         |														
    │   │   │   ├── footer.component.scss         |														
    │   │   │   ├── footer.component.spec.ts      |=== Out of box component											
    │   │   │   └── footer.component.ts___________|														
    │   │   ├── interfaces --> interfaces to define contracts and types												
    │   │   │   └── transaction.interface.ts --> interface for transaction item											
    │   │   ├── logo______________________________														
    │   │   │   ├── logo.component.html          |														
    │   │   │   ├── logo.component.scss          |==== Out of box component											
    │   │   │   ├── logo.component.spec.ts       |														
    │   │   │   └── logo.component.ts____________|														
    │   │   ├── pipes --> Pipes to add filters and formats													
    │   │   │   ├── filter-by.pipe.spec.ts --> unit test cases for filterBy pipe										
    │   │   │   ├── filter-by.pipe.ts --> logic of filter transaction by given value										
    │   │   │   ├── pt-currency.pipe.spec.ts --> unit test cases for ptCurrency pipe										
    │   │   │   ├── pt-currency.pipe.ts --> logic to return currecy icon											
    │   │   │   ├── pt-date.pipe.spec.ts --> unit test case for ptDate pipe											
    │   │   │   └── pt-date.pipe.ts --> logic to format date													
    │   │   ├── services --> Services, common utilites and interceptors												
    │   │   │   ├── get-transactions.service.spec.ts --> unit test cases for get transaction service								
    │   │   │   ├── get-transactions.service.ts --> service to get data from api call and mock json file							
    │   │   │   ├── loader-interceptor.service.spec.ts --> unit test cases for loader interceptor								
    │   │   │   ├── loader-interceptor.service.ts --> logic to show loader on http calls									
    │   │   │   ├── loader.service.spec.ts --> unit test cases for loader											
    │   │   │   ├── loader.service.ts --> sevice to inject loader												
    │   │   │   ├── util.service.spec.ts --> unit test case for utility service											
    │   │   │   └── util.service.ts --> utility functions													
    │   │   ├── submit-button________________________														
    │   │   │   ├── submit-button.component.html    |														
    │   │   │   ├── submit-button.component.scss    |===== Out of box component											
    │   │   │   ├── submit-button.component.spec.ts |														
    │   │   │   └── submit-button.component.ts______|														
    │   │   └── transaction-item_________________________													
    │   │       ├── transaction-item.component.html     |													
    │   │       ├── transaction-item.component.scss     |=== Out of box component										
    │   │       ├── transaction-item.component.spec.ts  |													
    │   │       └── transaction-item.component.ts_______|													
    │   ├── assets__________________																
    │   │   ├── background.jpg      |																
    │   │   ├── logo.jpg            |==== Assets files used in projects												
    │   │   ├── search-solid.svg    |																
    │   │   └── transactions.json___|																
    │   ├── environments --> Environment configuration files													
    │   │   ├── environment.prod.ts --> production configuration												
    │   │   └── environment.ts --> default configuration file													
    │   ├── favicon.ico --> project favicon															
    │   ├── index.html --> projects web page loads on browser													
    │   ├── main.ts --> script file to bootstarp the application												
    │   ├── polyfills.ts --> script and code make application browser compatible										
    │   ├── styles --> UI theme names as 'styles'														
    │   │   ├── _assets-path.scss --> all path to access asset items												
    │   │   ├── _form.scss --> form element related styling													
    │   │   ├── _global.scss --> global styling to apply on whole application											
    │   │   ├── main.scss --> main file contains all .sccs file imports												
    │   │   ├── _typography.scss --> typographic styling													                                                                                
    │   │   └── _vars.scss --> common variable to be used in all other scss											                                                                  
    │   ├── styles.scss --> theme imports, this file is injected inside angular project configuration in angular.json						                                  
    │   ├── test.ts --> entry point of karma tests														                                                                                    
    │   └── typing.d.ts --> contains only the type annotations													                                                                          
    ├── tsconfig.app.json --> customize the options from tsconfig.json												                                                                    
    ├── tsconfig.json --> provides the base options that different config files derive from									                                                      
    ├── tsconfig.spec.json --> typescript unit testing configuration												                                                                      
    └── tslint.json --> linting configuration                                                                                                                             														  
