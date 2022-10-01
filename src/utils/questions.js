export const python = [
    {
        level: 'Beginner',
        questions: [{
            question: <h3>What is Python? What are the benefits of using Python</h3>, answer: <article className="ibpage-article">
                <p>Python is a high-level, interpreted, general-purpose programming language. Being a general-purpose language, it can be used to build almost any type of application with the right tools/libraries. Additionally, python supports objects, modules, threads, exception-handling, and automatic memory management which help in modelling real-world problems and building applications to solve these problems.</p><p><strong>Benefits of using Python:</strong></p><ul>
                    <li>Python is a general-purpose programming language that has a simple, easy-to-learn syntax that emphasizes readability and therefore reduces the cost of program maintenance. Moreover, the language is capable of scripting, is completely open-source, and supports third-party packages encouraging modularity and code reuse.</li>
                    <li>Its high-level data structures, combined with dynamic typing and dynamic binding, attract a huge community of <a href="https://www.interviewbit.com/blog/python-developer-salary-in-india/" rel="noopener noreferrer" target="_blank">developers</a> for Rapid Application Development and deployment.</li>
                </ul><div className="raw-html-embed"></div>
            </article>
        }, {
            question: <h3>What is a dynamically typed language?</h3>, answer: <article className="ibpage-article">
                <p>Before we understand a dynamically typed language, we should learn about what typing is. <strong>Typing</strong> refers to type-checking in programming languages. In a <strong>strongly-typed</strong> language, such as Python, <strong>"1" + 2</strong> will result in a type error since these languages don't allow for "type-coercion" (implicit conversion of data types). On the other hand, a <strong>weakly-typed</strong> language, such as Javascript, will simply output <strong>"12"</strong> as result.</p><p>Type-checking can be done at two stages -</p><ul>
                    <li>
                        <strong>Static</strong> - Data Types are checked before execution.</li>
                    <li>
                        <strong>Dynamic</strong> - Data Types are checked during execution.</li>
                </ul><p>Python is an interpreted language, executes each statement line by line and thus type-checking is done on the fly, during execution. Hence, Python is a Dynamically Typed Language.</p><figure className="image image_resized" style={{ width: '75%' }}><img className="lazy-elem" data-src="https://s3.ap-south-1.amazonaws.com/myinterviewtrainer-domestic/public_assets/assets/000/000/924/original/dynamically_typed_language.jpg?1629972224" /></figure>
            </article>
        }, {
            question: <h3>What is an Interpreted language?</h3>, answer: <article className="ibpage-article">
                <p>An Interpreted language executes its statements line by line. Languages such as Python, Javascript, R, PHP, and Ruby are prime examples of Interpreted languages. Programs written in an interpreted language runs directly from the source code, with no intermediary compilation step.</p>
            </article>
        }, {
            question: <h3>What is PEP 8 and why is it important?</h3>, answer: <article className="ibpage-article">
                <p>PEP stands for <strong>Python Enhancement Proposal</strong>. A PEP is an official design document providing information to the Python community, or describing a new feature for Python or its processes. <strong>PEP 8</strong> is especially important since it documents the style guidelines for Python Code. Apparently contributing to the Python open-source community requires you to follow these style guidelines sincerely and strictly.</p>
            </article>
        }, {
            question: <h3>What is Scope in Python?</h3>, answer: <article className="ibpage-article">
                <p>Every object in Python functions within a scope. A scope is a block of code where an object in Python remains relevant. Namespaces uniquely identify all the objects inside a program. However, these namespaces also have a scope defined for them where you could use their objects without any prefix. A few examples of scope created during code execution in Python are as follows:</p><ul>
                    <li>A <strong>local scope</strong> refers to the local objects available in the current function.</li>
                    <li>A <strong>global scope</strong> refers to the objects available throughout the code execution since their inception.</li>
                    <li>A <strong>module-level scope</strong> refers to the global objects of the current module accessible in the program.</li>
                    <li>An <strong>outermost scope</strong> refers to all the built-in names callable in the program. The objects in this scope are searched last to find the name referenced.</li>
                </ul><p><strong>Note:</strong> Local scope objects can be synced with global scope objects using keywords such as <strong>global</strong>.</p>
            </article>
        }, {
            question: <h3>What are lists and tuples? What is the key difference between the two?</h3>, answer: <article className="ibpage-article">
                <p><strong>Lists </strong>and <strong>Tuples</strong> are both s<strong>equence data types</strong> that can store a collection of objects in Python. The objects stored in both sequences can have <strong>different data types</strong>. Lists are represented with <strong>square brackets</strong> <code>['sara', 6, 0.19]</code>, while tuples are represented with <strong>parantheses</strong> <code>('ansh', 5, 0.97)</code>.<br />But what is the real difference between the two? The key difference between the two is that while <strong>lists are mutable</strong>, <strong>tuples</strong> on the other hand are <strong>immutable</strong> objects. This means that lists can be modified, appended or sliced on the go but tuples remain constant and cannot be modified in any manner. You can run the following example on Python IDLE to confirm the difference:</p><pre><code className="language-python hljs">my_tuple = (<span className="hljs-string">'sara'</span>, <span className="hljs-number">6</span>, <span className="hljs-number">5</span>, <span className="hljs-number">0.97</span>)
                    my_list = [<span className="hljs-string">'sara'</span>, <span className="hljs-number">6</span>, <span className="hljs-number">5</span>, <span className="hljs-number">0.97</span>]
                    <span className="hljs-built_in">print</span>(my_tuple[<span className="hljs-number">0</span>])     <span className="hljs-comment"># output =&gt; 'sara'</span>
                    <span className="hljs-built_in">print</span>(my_list[<span className="hljs-number">0</span>])     <span className="hljs-comment"># output =&gt; 'sara'</span>
                    my_tuple[<span className="hljs-number">0</span>] = <span className="hljs-string">'ansh'</span>    <span className="hljs-comment"># modifying tuple =&gt; throws an error</span>
                    my_list[<span className="hljs-number">0</span>] = <span className="hljs-string">'ansh'</span>    <span className="hljs-comment"># modifying list =&gt; list modified</span>
                    <span className="hljs-built_in">print</span>(my_tuple[<span className="hljs-number">0</span>])     <span className="hljs-comment"># output =&gt; 'sara'</span>
                    <span className="hljs-built_in">print</span>(my_list[<span className="hljs-number">0</span>])     <span className="hljs-comment"># output =&gt; 'ansh'</span></code></pre>
            </article>
        }, {
            question: <h3>What are the common built-in data types in Python?</h3>, answer: <article className="ibpage-article">
                <p>There are several built-in data types in Python. Although, Python doesn't require data types to be defined explicitly during variable declarations type errors are likely to occur if the knowledge of data types and their compatibility with each other are neglected. Python provides <code>type()</code> and <code>isinstance()</code> functions to check the type of these variables. These data types can be grouped into the following categories-</p><ul><li>
                    <strong>None Type:</strong><br /><code>None</code> keyword represents the null values in Python. Boolean equality operation can be performed using these NoneType objects.</li></ul><figure className="table"><table>
                        <thead><tr>
                            <th>Class Name</th>
                            <th>Description</th>
                        </tr></thead>
                        <tbody><tr>
                            <td>NoneType</td>
                            <td>Represents the<strong> NULL</strong> values in Python.</td>
                        </tr></tbody>
                    </table></figure><ul><li>
                        <strong>Numeric Types:</strong><br />There are three distinct numeric types - <strong>integers, floating-point numbers</strong>, and <strong>complex numbers</strong>. Additionally, <strong>booleans</strong> are a sub-type of integers.</li></ul><figure className="table"><table>
                            <thead><tr>
                                <th>Class Name</th>
                                <th>Description</th>
                            </tr></thead>
                            <tbody>
                                <tr>
                                    <td>int</td>
                                    <td>Stores integer literals including hex, octal and binary numbers as integers</td>
                                </tr>
                                <tr>
                                    <td>float</td>
                                    <td>Stores literals containing decimal values and/or exponent signs as floating-point numbers</td>
                                </tr>
                                <tr>
                                    <td>complex</td>
                                    <td>Stores complex numbers in the form (A + Bj) and has attributes: <code>real</code> and <code>imag</code>
                                    </td>
                                </tr>
                                <tr>
                                    <td>bool</td>
                                    <td>Stores boolean value (True or False).</td>
                                </tr>
                            </tbody>
                        </table></figure><p><i><strong>Note:</strong> The standard library also includes <strong>fractions</strong> to store rational numbers and <strong>decimal</strong> to store floating-point numbers with user-defined precision.</i></p><ul><li>
                            <strong>Sequence Types:</strong><br />According to Python Docs, there are three basic Sequence Types - <strong>lists, tuples,</strong> and <strong>range</strong> objects. Sequence types have the <code>in</code> and <code>not in</code> operators defined for their traversing their elements. These operators share the same priority as the comparison operations.</li></ul><figure className="table"><table>
                                <thead><tr>
                                    <th>Class Name</th>
                                    <th>Description</th>
                                </tr></thead>
                                <tbody>
                                    <tr>
                                        <td>list</td>
                                        <td>Mutable sequence used to store collection of items.</td>
                                    </tr>
                                    <tr>
                                        <td>tuple</td>
                                        <td>Immutable sequence used to store collection of items.</td>
                                    </tr>
                                    <tr>
                                        <td>range</td>
                                        <td>Represents an immutable sequence of numbers generated during execution.</td>
                                    </tr>
                                    <tr>
                                        <td>str</td>
                                        <td>Immutable sequence of Unicode code points to store textual data.</td>
                                    </tr>
                                </tbody>
                            </table></figure><p><strong>Note: </strong>The standard library also includes additional types for processing:<br />1.<strong> Binary data </strong>such as <code>bytearray bytes</code> <code>memoryview</code> , and<br />2.<strong> Text strings </strong>such as <code>str</code>.</p><ul><li><strong>Mapping Types:</strong></li></ul><p>A mapping object can map hashable values to random objects in Python. Mappings objects are mutable and there is currently only one standard mapping type, the <i><strong>dictionary</strong></i>.</p><figure className="table"><table>
                                <thead><tr>
                                    <th>Class Name </th>
                                    <th>Description</th>
                                </tr></thead>
                                <tbody><tr>
                                    <td>dict</td>
                                    <td>Stores comma-separated list of <strong>key: value</strong> pairs</td>
                                </tr></tbody>
                            </table></figure><ul><li>
                                <strong>Set Types:</strong><br />Currently, Python has two built-in set types - <strong>set</strong> and <strong>frozenset</strong>. <strong>set</strong> type is mutable and supports methods like <code>add()</code> and <code>remove()</code>. <strong>frozenset</strong> type is immutable and can't be modified after creation.</li></ul><figure className="table"><table>
                                    <thead><tr>
                                        <th>Class Name</th>
                                        <th>Description</th>
                                    </tr></thead>
                                    <tbody>
                                        <tr>
                                            <td>set</td>
                                            <td>Mutable unordered collection of distinct hashable objects.</td>
                                        </tr>
                                        <tr>
                                            <td>frozenset</td>
                                            <td>Immutable collection of distinct hashable objects.</td>
                                        </tr>
                                    </tbody>
                                </table></figure><p><i><strong>Note:</strong> </i><code><i>set</i></code><i> is mutable and thus cannot be used as key for a dictionary. On the other hand, </i><code><i>frozenset</i></code><i> is immutable and thus, hashable, and can be used as a dictionary key or as an element of another set.</i></p><ul>
                    <li>
                        <strong>Modules:</strong><br />Module is an additional built-in type supported by the Python Interpreter. It supports one special operation, i.e., <strong>attribute access</strong>: <code>mymod.myobj</code>, where <code>mymod</code> is a module and <strong>myobj</strong> references a name defined in m's symbol table. The module's symbol table resides in a very special attribute of the module <strong>__dict__</strong>, but direct assignment to this module is neither possible nor recommended.</li>
                    <li>
                        <strong>Callable Types:</strong><br />Callable types are the types to which function call can be applied. They can be <strong>user-defined functions, instance methods, generator functions</strong>, and some other<strong> built-in functions, methods</strong> and <strong>classes</strong>.<br />Refer to the documentation at <a href="https://docs.python.org/3/reference/datamodel.html" rel="noopener noreferrer nofollow" target="_blank">docs.python.org</a> for a detailed view of the <strong>callable types</strong>.</li>
                </ul>
            </article>
        }, {
            question: <h3>What is pass in Python?</h3>, answer: <article className="ibpage-article">
                <p>The <code>pass</code> keyword represents a null operation in Python. It is generally used for the purpose of filling up empty blocks of code which may execute during runtime but has yet to be written. Without the <strong>pass</strong> statement in the following code, we may run into some errors during code execution.</p><pre><code className="language-python hljs"><span className="hljs-function"><span className="hljs-keyword">def</span> <span className="hljs-title">myEmptyFunc</span>():</span>
                    <span className="hljs-comment"># do nothing</span>
                    <span className="hljs-keyword">pass</span>
                    myEmptyFunc()    <span className="hljs-comment"># nothing happens</span>
                    <span className="hljs-comment">## Without the pass keyword</span>
                    <span className="hljs-comment"># File "&lt;stdin&gt;", line 3</span>
                    <span className="hljs-comment"># IndentationError: expected an indented block</span></code></pre>
            </article>
        }, {
            question: <h3>What are modules and packages in Python?</h3>, answer: <article className="ibpage-article">
                <p>Python packages and Python modules are two mechanisms that allow for <strong>modular programming</strong> in Python. Modularizing has several advantages -</p><ul>
                    <li>
                        <strong>Simplicity</strong>: Working on a single module helps you focus on a relatively small portion of the problem at hand. This makes development easier and less error-prone.</li>
                    <li>
                        <strong>Maintainability</strong>: Modules are designed to enforce logical boundaries between different problem domains. If they are written in a manner that reduces interdependency, it is less likely that modifications in a module might impact other parts of the program.</li>
                    <li>
                        <strong>Reusability</strong>: Functions defined in a module can be easily reused by other parts of the application.</li>
                    <li>
                        <strong>Scoping</strong>: Modules typically define a separate namespace, which helps avoid confusion between identifiers from other parts of the program.</li>
                </ul><p><strong>Modules</strong>, in general, are simply Python files with a .py extension and can have a set of functions, classes, or variables defined and implemented. They can be imported and initialized once using the <code>import</code> statement. If partial functionality is needed, import the requisite classes or functions using <code>from foo import bar</code>.</p><p><strong>Packages</strong> allow for hierarchial structuring of the module namespace using <strong>dot notation</strong>. As, <strong>modules</strong> help avoid clashes between global variable names, in a similar manner, <strong>packages</strong> help avoid clashes between module names.<br />Creating a package is easy since it makes use of the system's inherent file structure. So just stuff the modules into a folder and there you have it, the folder name as the package name. Importing a module or its contents from this package requires the package name as prefix to the module name joined by a dot.</p><p><i><strong>Note:</strong> You can technically import the package as well, but alas, it doesn't import the modules within the package to the local namespace, thus, it is practically useless.</i></p>
            </article>
        }, {
            question: <h3> What are global, protected and private attributes in Python?</h3>, answer: <article className="ibpage-article">
                <ul>
                    <li>
                        <strong>Global</strong> variables are public variables that are defined in the global scope. To use the variable in the global scope inside a function, we use the <code>global</code> keyword.</li>
                    <li>
                        <strong>Protected</strong> attributes are attributes defined with an underscore prefixed to their identifier eg. _sara. They can still be accessed and modified from outside the className they are defined in but a responsible developer should refrain from doing so.</li>
                    <li>
                        <strong>Private </strong>attributes are attributes with double underscore prefixed to their identifier eg. __ansh. They cannot be accessed or modified from the outside directly and will result in an AttributeError if such an attempt is made.</li>
                </ul>
            </article>
        }, {
            question: <h3> What is the use of self in Python?</h3>, answer: <article className="ibpage-article">
                <p><strong>Self </strong>is used to represent the instance of the className. With this keyword, you can access the attributes and methods of the className in python. It binds the attributes with the given arguments. self is used in different places and often thought to be a keyword. But unlike in C++, self is not a keyword in Python.</p>
            </article>
        }, {
            question: <h3>  What is __init__?</h3>, answer: <article className="ibpage-article">
                <p><code>__init__</code> is a contructor method in Python and is automatically called to allocate memory when a new object/instance is created. All classes have a <strong>__init__</strong> method associated with them. It helps in distinguishing methods and attributes of a className from local variables.</p><pre><code className="language-python hljs"><span className="hljs-comment"># className definition</span>
                    <span className="hljs-className"><span className="hljs-keyword">className</span> <span className="hljs-title">Student</span>:</span>
                    <span className="hljs-function"><span className="hljs-keyword">def</span> <span className="hljs-title">__init__</span>(<span className="hljs-params">self, fname, lname, age, section</span>):</span>
                    self.firstname = fname
                    self.lastname = lname
                    self.age = age
                    self.section = section
                    <span className="hljs-comment"># creating a new object</span>
                    stu1 = Student(<span className="hljs-string">"Sara"</span>, <span className="hljs-string">"Ansh"</span>, <span className="hljs-number">22</span>, <span className="hljs-string">"A2"</span>)</code></pre>
            </article>
        }, {
            question: <h3> What is break, continue and pass in Python?</h3>, answer: <article className="ibpage-article">
                <figure className="table"><table><tbody>
                    <tr>
                        <th>Break</th>
                        <td>The break statement terminates the loop immediately and the control flows to the statement after the body of the loop.</td>
                    </tr>
                    <tr>
                        <th>Continue</th>
                        <td>The continue statement terminates the current iteration of the statement, skips the rest of the code in the current iteration and the control flows to the next iteration of the loop.</td>
                    </tr>
                    <tr>
                        <th>Pass</th>
                        <td>As explained above, the pass keyword in Python is generally used to fill up empty blocks and is similar to an empty statement represented by a semi-colon in languages such as Java, C++, Javascript, etc.</td>
                    </tr>
                </tbody></table></figure><pre><code className="language-python hljs">pat = [<span className="hljs-number">1</span>, <span className="hljs-number">3</span>, <span className="hljs-number">2</span>, <span className="hljs-number">1</span>, <span className="hljs-number">2</span>, <span className="hljs-number">3</span>, <span className="hljs-number">1</span>, <span className="hljs-number">0</span>, <span className="hljs-number">1</span>, <span className="hljs-number">3</span>]
                    <span className="hljs-keyword">for</span> p <span className="hljs-keyword">in</span> pat:
                    <span className="hljs-keyword">pass</span>
                    <span className="hljs-keyword">if</span> (p == <span className="hljs-number">0</span>):
                    current = p
                    <span className="hljs-keyword">break</span>
                    <span className="hljs-keyword">elif</span> (p % <span className="hljs-number">2</span> == <span className="hljs-number">0</span>):
                    <span className="hljs-keyword">continue</span>
                    <span className="hljs-built_in">print</span>(p)    <span className="hljs-comment"># output =&gt; 1 3 1 3 1</span>
                    <span className="hljs-built_in">print</span>(current)    <span className="hljs-comment"># output =&gt; 0</span></code></pre>
            </article>
        }, {
            question: <h3> What are unit tests in Python?</h3>, answer: <article className="ibpage-article">
                <ul>
                    <li>Unit test is a unit testing framework of Python.</li>
                    <li>Unit testing means testing different components of software separately. Can you think about why unit testing is important? Imagine a scenario, you are building software that uses three components namely A, B, and C. Now, suppose your software breaks at a point time. How will you find which component was responsible for breaking the software? Maybe it was component A that failed, which in turn failed component B, and this actually failed the software. There can be many such combinations.</li>
                    <li>This is why it is necessary to test each and every component properly so that we know which component might be highly responsible for the failure of the software.</li>
                </ul>
            </article>
        }, {
            question: <h3> What is docstring in Python?</h3>, answer: <article className="ibpage-article">
                <ul>
                    <li>Documentation string or docstring is a multiline string used to document a specific code segment.</li>
                    <li>The docstring should describe what the function or method does.</li>
                </ul>
            </article>
        }, {
            question: <h3> What is slicing in Python?</h3>, answer: <article className="ibpage-article">
                <ul>
                    <li>As the name suggests, ‘slicing’ is taking parts of.</li>
                    <li>Syntax for slicing is <strong>[start : stop : step]</strong>
                    </li>
                    <li>
                        <strong>start</strong> is the starting index from where to slice a list or tuple</li>
                    <li>
                        <strong>stop</strong> is the ending index or where to sop.</li>
                    <li>
                        <strong>step</strong> is the number of steps to jump.</li>
                    <li>Default value for <strong>start</strong> is 0, <strong>stop</strong> is number of items, <strong>step</strong> is 1.</li>
                    <li>Slicing can be done on <strong>strings, arrays, lists</strong>, and <strong>tuples</strong>.</li>
                </ul><pre><code className="language-python hljs">numbers = [<span className="hljs-number">1</span>, <span className="hljs-number">2</span>, <span className="hljs-number">3</span>, <span className="hljs-number">4</span>, <span className="hljs-number">5</span>, <span className="hljs-number">6</span>, <span className="hljs-number">7</span>, <span className="hljs-number">8</span>, <span className="hljs-number">9</span>, <span className="hljs-number">10</span>]
                    <span className="hljs-built_in">print</span>(numbers[<span className="hljs-number">1</span> : : <span className="hljs-number">2</span>])  <span className="hljs-comment">#output : [2, 4, 6, 8, 10]</span></code></pre>
            </article>
        }, {
            question: <h3> Explain how can you make a Python Script executable on Unix?</h3>, answer: <article className="ibpage-article">
                <ul><li>Script file must begin with <strong>#!/usr/bin/env python</strong>
                </li></ul>
            </article>
        }, {
            question: <h3> What is the difference between Python Arrays and lists?</h3>, answer: <article className="ibpage-article">
                <ul>
                    <li>Arrays in python can only contain elements of same data types i.e., data type of array should be homogeneous. It is a thin wrapper around C language arrays and consumes far less memory than lists.</li>
                    <li>Lists in python can contain elements of different data types i.e., data type of lists can be heterogeneous. It has the disadvantage of consuming large memory.</li>
                </ul><pre><code className="language-python hljs"><span className="hljs-keyword">import</span> array
                    a = array.array(<span className="hljs-string">'i'</span>, [<span className="hljs-number">1</span>, <span className="hljs-number">2</span>, <span className="hljs-number">3</span>])
                    <span className="hljs-keyword">for</span> i <span className="hljs-keyword">in</span> a:
                    <span className="hljs-built_in">print</span>(i, end=<span className="hljs-string">' '</span>)    <span className="hljs-comment">#OUTPUT: 1 2 3</span>
                    a = array.array(<span className="hljs-string">'i'</span>, [<span className="hljs-number">1</span>, <span className="hljs-number">2</span>, <span className="hljs-string">'string'</span>])    <span className="hljs-comment">#OUTPUT: TypeError: an integer is required (got type str)</span>
                    a = [<span className="hljs-number">1</span>, <span className="hljs-number">2</span>, <span className="hljs-string">'string'</span>]
                    <span className="hljs-keyword">for</span> i <span className="hljs-keyword">in</span> a:
                    <span className="hljs-built_in">print</span>(i, end=<span className="hljs-string">' '</span>)    <span className="hljs-comment">#OUTPUT: 1 2 string</span></code></pre>
            </article>
        }]
    }
]

