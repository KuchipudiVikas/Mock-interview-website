export const python = {
    'level': 'experienced',
    'questions': [{ 'question': '<h3> Angular by default, uses client-side rendering for its applications.</h3>', 'answer': '<article class="ibpage-article">\n<p>Can one make an angular application to render on the server-side?</p><p>Yes, angular provides a technology called <strong>Angular Universal</strong>, which can be used to render applications on the server-side.</p><p>The advantages of using Angular Universal are:</p><ul>\n<li>First time users can instantly see a view of the application. This benefits in providing <strong>better user experience</strong>.</li>\n<li>Many search engines expect pages in plain HTML, thus, Universal can make sure that your content is available on every search engine, which leads to <strong>better SEO</strong>.</li>\n<li>Any server-side rendered application <strong>loads faster</strong> since rendered pages are available to the browser sooner.</li>\n</ul>\n</article>' }, { 'question': '<h3> What is Eager and Lazy loading?</h3>', 'answer': '<article class="ibpage-article">\n<ul>\n<li>\n<strong>Loading: </strong>The eager loading technique is the default module-loading strategy. Eager loading feature modules are loaded before the program begins. This is primarily utilized for small-scale applications.</li>\n<li>\n<strong>Lazy Loading: </strong>Lazy loading loads the feature modules dynamically as needed. This speeds up the application. It is utilized for larger projects where all of the modules are not required at the start.</li>\n</ul>\n</article>' }, { 'question': '<h3> What is view encapsulation in Angular?</h3>', 'answer': '<article class="ibpage-article">\n<p>View encapsulation specifies if the component\'s template and styles can impact the entire program or vice versa.</p><p><strong>Angular offers three encapsulation methods:</strong></p><ul>\n<li>\n<strong>Native: </strong>The component does not inherit styles from the main HTML. Styles defined in this component\'s @Component decorator are only applicable to this component.</li>\n<li>\n<strong>Emulated (Default): </strong>The component inherits styles from the main HTML. Styles set in the @Component decorator are only applicable to this component.</li>\n<li>\n<strong>None: </strong>The component\'s styles are propagated back to the main HTML and therefore accessible to all components on the page. Be wary of programs that have None and Native components. Styles will be repeated in all components with Native encapsulation if they have No encapsulation.</li>\n</ul>\n</article>' }, { 'question': '<h3> What are RxJs in Angular ?</h3>', 'answer': '<article class="ibpage-article">\n<p>RxJS is an acronym that stands for Reactive Extensions for JavaScript. It is used to enable the use of observables in our JavaScript project, allowing us to do reactive programming. RxJS is utilized in many popular frameworks, including Angular since it allows us to compose our asynchronous or callback-based code into a sequence of operations executed on a data stream that releases values from a publisher to a subscriber. Other programming languages, such as Java and Python, offer packages that allow them to develop reactive programs utilizing observables.</p><p>Most of the time, rxJs is used in HTTP calls with angular. Because http streams are asynchronous data, we can subscribe to them and apply filters to them.</p><p><strong>Example: </strong>The following is a simple example of how RxJs can be utilized with HTTP calls.</p><pre><code class="language-plaintext hljs">let\xa0 stream1 = httpc.get("https://www.example.com/somedata");\n let stream2 = stream1.pipe(filter(x=&gt;x&gt;3));\n stream2.subscribe(res=&gt;this.Success(res),res=&gt;this.Error(res));</code></pre>\n</article>' }, { 'question': '<h3> Explain string interpolation and property binding in Angular.</h3>', 'answer': '<article class="ibpage-article">\n<ul>\n<li>String interpolation and property binding are parts of <strong>data-binding</strong> in Angular.</li>\n<li>Data-binding is a feature in angular, which provides a way to communicate between the component(Model) and its view(HTML template).</li>\n<li>Data-binding can be done in two ways, <strong>one-way</strong> binding and <strong>two-way</strong> binding.</li>\n<li>In Angular, data from the component can be inserted inside the HTML template. In one-way binding, any changes in the component will directly reflect inside the HTML template but, vice-versa is not possible. Whereas, it is possible in two-way binding.</li>\n<li>String interpolation and property binding allow only one-way data binding.</li>\n<li>String interpolation uses the double curly braces <strong>{{ }}</strong> to display data from the component. Angular automatically runs the expression written inside the curly braces, for example, {{ 2 + 2 }} will be evaluated by Angular and the output 4, will be displayed inside the HTML template. Using property binding, we can bind the DOM properties of an HTML element to a component\'s property. Property binding uses the square brackets <strong>[ ]</strong> syntax.</li>\n</ul>\n</article>' }, { 'question': '<h3> How are observables different from promises?</h3>', 'answer': '<article class="ibpage-article">\n<p>The first difference is that an Observable is <strong>lazy</strong> whereas a Promise is <strong>eager</strong>.</p><figure class="table"><table>\n<thead><tr>\n<th>Promise</th>\n<th>Observable</th>\n</tr></thead>\n<tbody>\n<tr>\n<td>Emits a single value</td>\n<td>Emits multiple values over a period of time</td>\n</tr>\n<tr>\n<td>Not Lazy</td>\n<td>Lazy. An observable is not called until we subscribe to the observable</td>\n</tr>\n<tr>\n<td>Cannot be cancelled</td>\n<td>Can be cancelled by using the unsubscribe() method</td>\n</tr>\n<tr>\n<td>\xa0</td>\n<td>Observable provides operators like map, forEach, filter, reduce, retry, retryWhen etc.</td>\n</tr>\n</tbody>\n</table></figure><p>Consider the following Observable:</p><pre><code class="language-plaintext hljs">const observable = rxjs.Observable.create(observer =&gt; {\n       console.log(\'Text inside an observable\');\n       observer.next(\'Hello world!\');\n       observer.complete();\n     });\n     console.log(\'Before subscribing an Observable\');\n     observable.subscribe((message)=&gt; console.log(message));    </code></pre><p>\xa0When you run the above Observable, you can see messages being displayed in the following order:</p><pre><code class="language-plaintext hljs">Before subscribing an Observable\nText inside an observable\nHello world!</code></pre><p>As you can see, observables are lazy. Observable runs only when someone subscribes to them hence, the message “Before subscribing…” is displayed ahead of the message inside the observable.</p><p>Now let’s consider a Promise: \xa0 \xa0</p><pre><code class="language-plaintext hljs">const promise = new Promise((resolve, reject) =&gt; {\n       console.log(\'Text inside promise\');\n       resolve(\'Hello world!\');\n     });\n     console.log(\'Before calling then method on Promise\');\n     greetingPoster.then(message =&gt; console.log(message));   \n    </code></pre><p>Running the above promise, the messages will be displayed in the following order:</p><pre><code class="language-plaintext hljs">Text inside promise\nBefore calling then method on Promise\nHello world!</code></pre><p>As you can see the message inside Promise is displayed first. This means that a promise runs before the <strong>then</strong> method is called. Therefore, promises are <strong>eager</strong>.</p><p>The next difference is that Promises are always <strong>asynchronous</strong>. Even when the promise is immediately resolved. Whereas an Observable, can be both <strong>synchronous</strong> and <strong>asynchronous</strong>.</p><p>The above example of an observable is the case to show that an observable is synchronous. Let’s see the case where an observable can be asynchronous:</p><pre><code class="language-plaintext hljs"> const observable = rxjs.Observable.create(observer =&gt; {\n       setTimeout(()=&gt;{\n           observer.next(\'Hello world\');\n           observer.complete();\n       },3000)\n     });\n     console.log(\'Before calling subscribe on an Observable\');\n     observable.subscribe((data)=&gt; console.log(data));\n     console.log(\'After calling subscribe on an Observable\');    </code></pre><p>The messages will be displayed in the following order:</p><pre><code class="language-plaintext hljs">Before calling subscribe on an Observable\nAfter calling subscribe on an Observable\nHello world!</code></pre><p>You can see in this case, observable runs asynchronously.</p><p>The next difference is that Observables can emit <strong>multiple</strong> values whereas Promises can emit only one value.</p><p>The biggest feature of using observables is the use of <strong>operators</strong>. We can use multiple operators on an observable whereas, there is no such feature in a promise.</p>\n</article>' }, { 'question': '<h3> Explain the concept of Dependency Injection?</h3>', 'answer': '<article class="ibpage-article">\n<p>Dependency injection is an application design pattern which is implemented by Angular.</p><p>It also forms one of the core concepts of Angular.</p><p><strong>So what is dependency injection in simple terms?</strong></p><p>Let’s break it down, dependencies in angular are nothing but services which have functionality. The functionality of a service, can be needed by various components and directives in an application. Angular provides a smooth mechanism by which we can inject these dependencies into our components and directives.</p><p>So basically, we are just making dependencies which are injectable across all components of an application.</p><figure class="image image_resized" style="width:75%;"><img class="lazy-elem" data-src="https://d3n0h9tb65y8q.cloudfront.net/public_assets/assets/000/003/680/original/Dependency_Injection.png?1660285409"/></figure><p>Let’s understand how DI (Dependency Injection) works:</p><p>Consider the following service, which can be generated using: <code>ng g service test</code></p><pre><code class="language-plaintext hljs"> import { Injectable } from \'@angular/core\';\n     @Injectable({\n       providedIn: \'root\'\n     })\n     export class TestService {\n       importantValue:number = 42;\n       constructor() { }\n       returnImportantValue(){\n         return this.importantValue;\n       }\n     }    </code></pre><p>\xa0As one can notice, we can create injectable dependencies by adding the <strong>@Injectable</strong> decorator to a class.</p><p>We inject the above dependency inside the following component: \xa0\xa0</p><pre><code class="language-plaintext hljs"> import { TestService } from \'./../test.service\';\n      import { Component, OnInit } from \'@angular/core\';\n\n      @Component({\n        selector: \'app-test\',\n        templateUrl: \'./test.component.html\',\n        styleUrls: [\'./test.component.css\']\n      })\n      export class TestComponent implements OnInit {\n        value:number;\n        constructor(private testService:TestService) { }\n\n        ngOnInit() {\n          this.value = this.testService.returnImportantValue();\n        }\n      }</code></pre><p>\xa0One can see we have imported our TestService at the top of the page. Then, we created an instance inside the constructor of the component and implemented the <strong>returnImportantValue</strong> function of the service.</p><p>From the above example, we can observe how angular provides a smooth way to inject dependencies in any component.</p>\n</article>' }, { 'question': '<h3> What are pipes in Angular explain with an example?</h3>', 'answer': '<article class="ibpage-article">\n<p>Pipes are functions that simplify the process of wiring up your JavaScript expressions and transforming them into their desired output. They can be compared to, say, string functions in other programming languages. Pipes also allow you to combine multiple expressions together, whether they\'re all values or some values and some declarations.</p><p><strong>For example:</strong>\xa0</p><p><code>var css = myTheme.color | "red" ;\xa0</code></p><p>This line would assign a value to<code> css</code> , and it\'s equivalent to writing out the following code:</p><p>Pipes have several built-in functions that allow you to transform data, such as value and extract. We can also create our own custom pipes.</p><p>Pipes are data transformers that execute on an Angular Component\'s output. They take in data and return transformed data. For example, if you have an expression such as number | 1000, the number pipe will take data from the output and transform it into 1000. In Angular, there are many built-in pipes that you can use. You can also create your own custom pipes by implementing the PipeTransform interface in a class.</p><p>Pipes receive an input which can be a value expression, a function returning an expression, or even a component property., that outputs a number with a value of 1,000. With a pipe, you can transform this output into a formatted string of "1,000" or "1.000".</p><figure class="image image_resized" style="width:50%;"><img class="lazy-elem" data-src="https://d3n0h9tb65y8q.cloudfront.net/public_assets/assets/000/003/671/original/pipes_in_Angular.png?1660284978"/></figure><p><strong>Example:\xa0</strong></p><pre><code class="language-plaintext hljs">import { Component } from \'@angular/core\';\n\n@Component({\nselector: \'app-root\',\ntemplate: `{{ title | uppercase}}`,\nstyleUrls: [\'./app.component.css\']\n})\nexport class AppComponent {\ntitle = \'this is an example of custom pies in angular\';\n}</code></pre><p><strong>Output:\xa0</strong></p><p><strong>THIS IS AN EXAMPLE OF CUSTOM PIPES IN ANGULAR</strong></p>\n</article>' }, { 'question': '<h3> What exactly is a parameterized pipe?</h3>', 'answer': '<article class="ibpage-article">\n<p>To fine-tune its output, a pipe can receive any number of optional parameters. The parameterized pipe is constructed by first stating the pipe name followed by a colon (:) and then the parameter value. If the pipe supports several arguments, use colons to separate the values.</p><p><strong>Example: </strong>Let\'s look at a birthday with a certain format (dd/MM/yyyy):</p><pre><code class="language-plaintext hljs">import { Component } from \'@angular/core\';\n \xa0\xa0\xa0@Component({\n \xa0\xa0\xa0\xa0 selector: \'app-example\',\n \xa0\xa0\xa0\xa0 template: `&lt;p&gt;Birthday is {{ birthday | date:\'dd/MM/yyyy\'}}&lt;/p&gt;`\n \xa0\xa0\xa0})\n \xa0\xa0 export class ExampleComponent {\n \xa0\xa0\xa0\xa0 birthday = new Date(2000, 7, 15);\n \xa0\xa0\xa0}</code></pre>\n</article>' }, { 'question': '<h3> What are class decorators?</h3>', 'answer': '<article class="ibpage-article">\n<p>Class Decorators are the highest-level decorators that determine the purpose of the classes. They indicate to Angular that a specific class is a component or module. And the decorator enables us to declare this effect without having to write any code within the class.</p><p><strong>Example:</strong></p><pre><code class="language-plaintext hljs">import { NgModule, Component } from \'@angular/core\';\xa0 \n@Component({\xa0 \n  selector: \'class-component\',\xa0 \n  template: \'&lt;div&gt; This is a class component ! &lt;/div&gt;\',\xa0 \n})\xa0 \nexport class ClassComponent {\xa0 \n  constructor() {\xa0 \n \xa0\xa0 console.log(\'This is a class component!\');\xa0 \n \xa0}\xa0 \n}\xa0 \n@NgModule({\xa0 \n  imports: [],\xa0 \n  declarations: [],\xa0 \n})\xa0 \nexport class ClassModule {\xa0 \n  constructor() {\xa0 \n \xa0\xa0 console.log(\'This is a class module!\');\xa0 \n \xa0}\xa0 \n}</code></pre><p>It is a component or module in which no code in the class is required to tell Angular. We only need to design it, and Angular will take care of the rest.</p>\n</article>' }, { 'question': '<h3> What are Method decorators?</h3>', 'answer': '<article class="ibpage-article">\n<p>Method decorators, as the name implies, are used to add functionality to the methods defined within our class.</p><p><strong>Example: </strong>@HostListener, is a good example of method decorators.</p><pre><code class="language-plaintext hljs">import { Component, HostListener } from \'@angular/core\';\xa0 \n@Component({\xa0 \n  selector: \'method-component\',\xa0 \n  template: \'&lt;div&gt; This is a test method component ! &lt;/div&gt;\',\xa0 \n})\xa0 \nexport class MethodComponent {\xa0 \n \xa0@HostListener(\'click\', [\'$event\'])\n \xa0\xa0 onHostClick(event: Event) {\n \xa0\xa0 console.log(\'clicked now this event is available !\');\xa0 \n \xa0\xa0\xa0}\n}</code></pre><p>The @HostListener decorator is used before the onHostClick () method in the above example code.</p>\n</article>' }, { 'question': '<h3> What are property decorators?</h3>', 'answer': '<article class="ibpage-article">\n<p>These are the second most popular types of decorators. They enable us to enhance some of the properties in our classes. We can certainly understand why we utilize any certain class property by using a property decorator.</p><p>There are many property decorators available for example @Input(), @Output, @ReadOnly(), @Override()\xa0</p><p><strong>Example:\xa0</strong></p><pre><code class="language-plaintext hljs">import { Component, Input } from \'@angular/core\';\xa0 \n@Component({\xa0 \n  selector: \'prop-component\',\xa0 \n  template: \'&lt;div&gt; This is a test component ! &lt;/div&gt;\'\xa0 \n})\xa0 \nexport class PropComponent {\xa0 \n \xa0@Input()\xa0 \n  exampleProperty: string;\xa0 \n}</code></pre><p>The input binding would be sent via a component property binding:</p><pre><code class="language-plaintext hljs">&lt;prop-component\xa0 \n  [propProperty]="propData"&gt;\xa0 \n&lt;/prop-component&gt;</code></pre>\n</article>' }, { 'question': '<h3> What is the Component Decorator in Angular?</h3>', 'answer': '<article class="ibpage-article">\n<p>TypeScript classes are used to create components. This class genre is then decorated with the "@Component" decorator. The decorator\'s function is to take a metadata object holding component information and decorate it.</p><p>A Decorator is always preceded by @. The Decorator must come before the class definition. We can also make our own decorators.</p><p><strong>Example: </strong>The example below shows us a Class decorated with the @Component decorator.</p><pre><code class="language-plaintext hljs">import {Component} from \'@angular/core\';\n\n@Component({\n \xa0\xa0 selector: \'app-root\',\n \xa0\xa0 templateUrl: \'./app.component.html\',\n \xa0\xa0 styleUrls: [\'./app.component.css\']\n})\nexport class AppComponent {\n \xa0\xa0 title = \'Example component\';\n}</code></pre><p>The metadata object received by the decorator has values such as templateUrl, selector, and others, with the templateUrL property pointing to an HTML file that defines what you see on the application.</p>\n</article>' }, { 'question': '<h3> What are lifecycle hooks in Angular? Explain a few lifecycle hooks.</h3>', 'answer': '<article class="ibpage-article">\n<p>Every component in Angular has a lifecycle, and different phases it goes through from the time of creation to the time it\'s destroyed. Angular provides <strong>hooks</strong> to tap into these phases and trigger changes at specific phases in a lifecycle.</p><figure class="image image_resized" style="width:50%;"><img class="lazy-elem" data-src="https://d3n0h9tb65y8q.cloudfront.net/public_assets/assets/000/003/676/original/lifecycle_hooks_in_Angular.png?1660285175"/></figure><ul>\n<li>\n<strong>ngOnChanges( )</strong> This hook/method is called before ngOnInit and whenever one or more input properties of the component change.<br/>This method/hook receives a SimpleChanges object which contains the previous and current values of the property.</li>\n<li>\n<strong>ngOnInit( )</strong> This hook gets called once, after the ngOnChanges hook.<br/>It initializes the component and sets the input properties of the component.</li>\n<li>\n<strong>ngDoCheck( )</strong> It gets called after ngOnChanges and <strong>ngOnInit</strong> and is used to detect and act on changes that cannot be detected by Angular.<br/>We can implement our change detection algorithm in this hook. <strong>ngAfterContentInit( )</strong> It gets called after the first <strong>ngDoCheck</strong> hook. This hook responds after the content gets projected inside the component.</li>\n<li>\n<strong>ngAfterContentChecked( )</strong> It gets called after <strong>ngAfterContentInit</strong> and every subsequent <strong>ngDoCheck</strong>. It responds after the projected content is checked.</li>\n<li>\n<strong>ngAfterViewInit( )</strong> It responds after a component\'s view, or a child component\'s view is initialized.</li>\n<li>\n<strong>ngAfterViewChecked( )</strong> It gets called after <strong>ngAfterViewInit</strong>, and it responds after the component\'s view, or the child component\'s view is checked.</li>\n<li>\n<strong>ngOnDestroy( )</strong> It gets called just before Angular destroys the component. This hook can be used to clean up the code and detach event handlers.</li>\n</ul><p>Let’s understand how to use <strong>ngOnInit</strong> hook, since it’s the most often used hook. If one has to process a lot of data during component creation, it’s better to do it inside <strong>ngOnInit</strong> hook rather than the constructor:\xa0</p><pre><code class="language-plaintext hljs">import { Component, OnInit } from \'@angular/core\';\n\n      @Component({\n        selector: \'app-test\',\n        templateUrl: \'./test.component.html\',\n        styleUrls: [\'./test.component.css\']\n      })\n      export class TestComponent implements OnInit {\n        constructor() { }\n\n        ngOnInit() {\n          this.processData();\n        }\n\n        processData(){\n          // Do something..\n        }\n\n      }</code></pre><p>\xa0As you can see we have imported OnInit but we have used <strong>ngOnInit</strong> function. This principle should be used with the rest of the hooks as well.</p>\n</article>' }, { 'question': '<h3> What are router links?</h3>', 'answer': '<article class="ibpage-article">\n<p>RouterLink is an anchor tag directive that gives the router authority over those elements. Because the navigation routes are set.</p><p><strong>Example: </strong>As seen below, you may pass string values to the router-link directive.</p><pre><code class="language-plaintext hljs">&lt;h1&gt;Example of an Angular Router&lt;/h1&gt;\n&lt;nav&gt;\n  &lt;a routerLink="/home" &gt;Home Page of our website&lt;/a&gt;\n  &lt;a routerLink="/about-us" &gt;About us&lt;/a&gt;\n&lt;/nav&gt;\n&lt;router-outlet&gt;&lt;/router-outlet&gt;</code></pre>\n</article>' }, { 'question': '<h3> What exactly is the router state?</h3>', 'answer': '<article class="ibpage-article">\n<p>RouterState is a route tree. This tree\'s nodes are aware of the "consumed" URL segments, retrieved arguments, and processed data. You may use the Router service and the routerState property to get the current RouterState from anywhere in the application.</p><p><strong>Example:\xa0</strong></p><pre><code class="language-plaintext hljs">@Component({templateUrl:\'example.html\'})\nclass MyComponent {\n  constructor(router: Router) {\n \xa0\xa0 const state: RouterState = router.routerState;\n \xa0\xa0 const root: ActivatedRoute = state.root;\n \xa0\xa0 const child = root.firstChild;\n \xa0\xa0 const id: Observable&lt;string&gt; = child.params.map(p =&gt; p.id);\n \xa0\xa0 //...\n \xa0}\n}</code></pre>\n</article>' }, { 'question': '<h3> What does Angular Material means?</h3>', 'answer': '<article class="ibpage-article">\n<p>Angular Material is a user interface component package that enables professionals to create a uniform, appealing, and fully functioning websites, web pages, and web apps. It does this by adhering to contemporary web design concepts such as gentle degradation and browser probability.</p>\n</article>' }, { 'question': '<h3> What is ngOnInit?</h3>', 'answer': '<article class="ibpage-article">\n<p>ngOnInit is a lifecycle hook and callback function used by Angular to mark the creation of a component. It accepts no arguments and returns a void type.</p><p><strong>Example:\xa0</strong></p><pre><code class="language-plaintext hljs">export class MyComponent implements OnInit {\nconstructor() { }\n \xa0\xa0 ngOnInit(): void {\n \xa0\xa0\xa0\xa0\xa0\xa0 //....\n \xa0\xa0\xa0}\n}</code></pre>\n</article>' }, { 'question': '<h3> What is transpiling in Angular ?</h3>', 'answer': '<article class="ibpage-article">\n<p>Transpiling is the process of transforming the source code of one programming language into the source code of another. Typically, in Angular, this implies translating TypeScript to JavaScript. TypeScript (or another language like as Dart) can be used to develop code for your Angular application, which is subsequently transpiled to JavaScript. This occurs naturally and internally.</p>\n</article>' }, { 'question': '<h3> What are HTTP interceptors ?</h3>', 'answer': '<article class="ibpage-article">\n<p>Using the HttpClient, interceptors allow us to intercept incoming and outgoing HTTP requests. They are capable of handling both HttpRequest and HttpResponse. We can edit or update the value of the request by intercepting the HTTP request, and we can perform some specified actions on a specific status code or message by intercepting the answer.</p><p><strong>Example: </strong>In the following example we will set the Authorization header Bearer for all the requests:</p><pre><code class="language-plaintext hljs">token.interceptor.ts\nimport { Injectable } from \'@angular/core\';\nimport { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from \'@angular/common/http\';\nimport { Observable } from \'rxjs/Observable\';\n\n@Injectable()\nexport class TokenInterceptor implements HttpInterceptor {\n \xa0\xa0 public intercept(req: HttpRequest&lt;any&gt;, next: HttpHandler): Observable&lt;HttpEvent&lt;any&gt;&gt; {\n \xa0\xa0 const token = localStorage.getItem(\'token\') as string;\n \xa0\xa0\xa0\xa0\xa0\xa0 if (token) {\n \xa0\xa0\xa0\xa0\xa0\xa0 req = req.clone({\n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 setHeaders: {\n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \'Authorization\': `Bearer ${token}`\n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0}\n \xa0\xa0\xa0\xa0\xa0\xa0\xa0});\n \xa0\xa0\xa0\xa0\xa0\xa0\xa0}\n \xa0\xa0\xa0\xa0\xa0\xa0 return next.handle(req);\n \xa0\xa0\xa0}\n}</code></pre><p>We have to register the interceptor as singleton in the module providers</p><pre><code class="language-plaintext hljs">app.module.ts\nimport { NgModule } from \'@angular/core\';\nimport { BrowserModule } from \'@angular/platform-browser\';\nimport { HTTP_INTERCEPTORS } from \'@angular/common/http\';\nimport { AppComponent } from \'./app.component\';\nimport { TokenInterceptor } from \'./token.interceptor\';\n\n@NgModule({\nimports: [\n \xa0\xa0 BrowserModule\n],\ndeclarations: [\n \xa0\xa0 AppComponent\n],\nbootstrap: [AppComponent],\nproviders: [{\n \xa0\xa0 provide: HTTP_INTERCEPTORS,\n \xa0\xa0 useClass: TokenInterceptor,\n \xa0\xa0 multi: true\n}]\n})\nexport class AppModule {}</code></pre>\n</article>' }, { 'question': '<h3> What is AOT compilation? What are the advantages of AOT?</h3>', 'answer': '<article class="ibpage-article">\n<p>Every Angular application consists of components and templates that the browser cannot understand. Therefore, all the Angular applications need to be compiled first before running inside the browser.</p><p>Angular provides two types of compilation:</p><ul>\n<li>JIT(Just-in-Time) compilation</li>\n<li>AOT(Ahead-of-Time) compilation</li>\n</ul><figure class="image image_resized" style="width:75%;"><img class="lazy-elem" data-src="https://d3n0h9tb65y8q.cloudfront.net/public_assets/assets/000/003/674/original/AOT_compilation.png?1660285110"/></figure><p>In JIT compilation, the application compiles inside the browser during runtime. Whereas in the AOT compilation, the application compiles during the build time.</p><p>The advantages of using AOT compilation are:</p><ul>\n<li>Since the application compiles before running inside the browser, the browser loads the executable code and renders the application immediately, which leads to <strong>faster rendering</strong>.</li>\n<li>In AOT compilation, the compiler sends the external HTML and CSS files along with the application, eliminating separate AJAX requests for those source files, which leads to <strong>fewer ajax requests</strong>.</li>\n<li>Developers can detect and handle errors during the building phase, which helps in <strong>minimizing errors</strong>.</li>\n<li>The AOT compiler adds HTML and templates into the JS files before they run inside the browser. Due to this, there are no extra HTML files to be read, which provide <strong>better security</strong> to the application.</li>\n</ul><p>By default, angular builds and serves the application using JIT compiler:</p><pre><code class="language-plaintext hljs">ng build\nng serve</code></pre><p>For using AOT compiler following changes should be made:</p><pre><code class="language-plaintext hljs">ng build --aot\nng serve --aot</code></pre>\n</article>' }, { 'question': '<h3> What is Change Detection, and how does the Change Detection Mechanism work?</h3>', 'answer': '<article class="ibpage-article">\n<p>The process of synchronizing a model with a view is known as Change Detection. Even when utilizing the ng Model to implement two-way binding, which is syntactic sugar on top of a unidirectional flow. Change detection is incredibly fast, but as an app\'s complexity and the number of components increase, change detection will have to do more and more work.</p><p>Change Detection Mechanism-moves only ahead and never backward, beginning with the root component and ending with the last component. This is what one-way data flow entails. The tree of components is the architecture of an Angular application. Each component is a child, but the child is not a parent. A $digest loop is no longer required with the one-way flow.</p>\n</article>' }, { 'question': '<h3> What is a bootstrapping module?</h3>', 'answer': '<article class="ibpage-article">\n<p>Every application contains at least one Angular module, which is referred to as the bootstrapping module. AppModule is the most popular name for it.</p><p><strong>Example:</strong> The following is the default structure of an AngularCLI-generated AppModule:</p><pre><code class="language-plaintext hljs">import { BrowserModule } from \'@angular/platform-browser\';\nimport { NgModule } from \'@angular/core\';\nimport { FormsModule } from \'@angular/forms\';\nimport { HttpClientModule } from \'@angular/common/http\';\n\nimport { AppComponent } from \'./app.component\';\n\n@NgModule({\n  declarations: [\n \xa0\xa0 AppComponent\n \xa0],\n  imports: [\n \xa0\xa0 BrowserModule,\n \xa0\xa0 FormsModule,\n \xa0\xa0 HttpClientModule\n \xa0],\n  providers: [],\n  bootstrap: [AppComponent]\n})\nexport class AppModule { }</code></pre>\n</article>' }, { 'question': '<h3> Explain MVVM architecture</h3>', 'answer': '<article class="ibpage-article">\n<p>MVVM architecture consists of three parts:</p><ol>\n<li>Model</li>\n<li>View</li>\n<li>ViewModel</li>\n</ol><figure class="image"><img class="lazy-elem" data-src="https://d3n0h9tb65y8q.cloudfront.net/public_assets/assets/000/003/681/original/MVVM_architecture.png?1660285461"/></figure><ul>\n<li>\n<strong>Model</strong> contains the structure of an entity. In simple terms it contains data of an object.</li>\n<li>\n<strong>View</strong> is the visual layer of the application. It displays the data contained inside the Model. In angular terms, this will be the HTML template of a component.</li>\n<li>\n<strong>ViewModel</strong> is an abstract layer of the application. A viewmodel handles the logic of the application. It manages the data of a model and displays it in the view.</li>\n</ul><p><strong>View and ViewModel</strong> are connected with data-binding (two-way data-binding in this case). Any change in the view, the viewmodel takes a note and changes the appropriate data inside the model.</p>\n</article>' }]

}