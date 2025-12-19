const slides = [
    {
        title: "Content",
        content: `
            <p><div align="center"></p>
            <p>  <h6></p>
            <p>  <h1><b>Ant Colony Optimization and Its Application to</p>
            <p>the Vehicle Routing Problem with Pickups and</p>
            <p>Deliveries</b></h1></p>
            <p>  <h3><b>Advanced Algorithms</b></h3></p>
            
            <p>  <h3><b>Group 20</b></h3></p>
            
            <p>  <b>Student Members:</b><br></p>
            <p>  Nguyễn Thành Đạt - 2570163<br></p>
            <p>  Lê Phước Thành - 2570322<br></p>
            <p>  Lê Đức Phương - 2570480<br></p>
            <p>  Hồ Bảo An - 2570164<br></p>
            
            <p>  <b>Instructor:</b><br></p>
            <p>  Dr. Le Hong Trang</p>
            <p>  <br></p>
            <p>  <br></p>
            <p>  December 24th, 2025</p>
            <p></div></p>
            <p><hr></p>
        `
    },
    {
        title: "SECTION 1: INTRODUCTION",
        content: `
            <p><h1>SECTION 1: INTRODUCTION</h1></p>
        `
    },
    {
        title: "1.1 Problem Statement",
        content: `
            <p><h2>1.1 Problem Statement</h2></p>
        `
    },
    {
        title: "Content",
        content: `
            <p>Many problems in transportation and logistics can be formulated as optimization problems, where the objective is to minimize cost, distance, or time while satisfying a set of constraints. A large number of these problems are computationally difficult, especially as the problem size increases. One well-known example is the Vehicle Routing Problem (VRP), which focuses on determining optimal routes for a fleet of vehicles that start and end at a central depot while serving a set of customers [5, 6, 14, 22, 30, 31].</p>
            
            <p>In the classical VRP, customers require only delivery services. However, many real-world scenarios require vehicles to both deliver and collect goods during the same route. This leads to the Vehicle Routing Problem with Pickups and Deliveries (VRPPD) [28]. In VRPPD, the load of a vehicle changes dynamically along its route, making it more complex than the classical VRP. In particular, vehicle capacity constraints must be satisfied at all times during the route.</p>
            
            <p>Several important variants of VRPPD have been studied in the literature. The Vehicle Routing Problem with Backhauls (VRPB) assumes that all delivery customers are served before any pickup customer. A more general and challenging variant is the Mixed Vehicle Routing Problem with Backhauls (MVRPB), where delivery and pickup customers can be visited in any order. Another variant is the Vehicle Routing Problem with Simultaneous Pickups and Deliveries (VRPSPD), where both pickup and delivery operations may occur at the same customer location</p>
            <p>.</p>
            
            <p>Among these variants, MVRPB and VRPSPD are particularly difficult because vehicle load feasibility must be maintained throughout the entire route regardless of the visiting sequence. This requirement significantly increases the complexity of the problem. As a result, these variants are classified as NP-hard, making exact solution approaches impractical for large-scale problem instances.</p>
        `
    },
    {
        title: "1.2 Applications",
        content: `
            <p><h2>1.2 Applications</h2></p>
        `
    },
    {
        title: "Content",
        content: `
            <p>Vehicle Routing Problems with Pickups and Deliveries arise in many real-world logistics applications. A common example is the distribution of bottled beverages, where full bottles are delivered to customers and empty bottles are collected for recycling or reuse [11]. Similar situations occur in the chemical industry, where containers or residual materials must be retrieved after delivery [9].</p>
            
            <p>Other applications include laundry services, in which clean clothes are delivered and used clothes are collected, as well as rental and reverse logistics systems. Waste collection and postal services may also involve both pickup and delivery operations within the same routing process [11]. These applications demonstrate the practical importance of VRPPD, as efficient routing solutions can significantly reduce operational costs and improve service quality.</p>
        `
    },
    {
        title: "1.3 Literature Review",
        content: `
            <p><h2>1.3 Literature Review</h2></p>
        `
    },
    {
        title: "Content",
        content: `
            <p>Due to the computational difficulty of VRPPD and its variants, many solution methods have been proposed in previous studies. Early approaches mainly relied on simple heuristic techniques, such as load-based insertion heuristics [7, 24, 33]. These methods construct routes incrementally while checking capacity constraints. Although they are fast and easy to implement, their solution quality is often limited.</p>
            
            <p>More advanced approaches use metaheuristic algorithms. Tabu Search (TS) has been widely applied to VRPPD by exploring solution neighborhoods while avoiding repeated search patterns [12]. TS is effective in improving local solutions, but its performance [27, 3] depends heavily on parameter tuning and neighborhood design.</p>
            
            <p>Large Neighborhood Search (LNS) [32] is another powerful approach that has been used for VRPPD. By repeatedly removing and reinserting parts of a solution, LNS can escape local optima and produce high-quality solutions. However, LNS can be computationally expensive, especially for large instances.</p>
            
            <p>Genetic Algorithms (GA) [37] have also been applied to VRPPD as population-based search methods [16]. GAs provide strong global exploration capabilities through crossover and mutation. Nevertheless, designing genetic operators that preserve feasibility in VRPPD is challenging, which increases implementation complexity.</p>
            
            <p>Although these methods have achieved promising results, they still face difficulties in balancing solution quality, computational efficiency, and feasibility management. These challenges motivate the exploration of alternative solution methods for complex VRPPD variants such as MVRPB and VRPSPD [5, 6].</p>
        `
    },
    {
        title: "1.4 Motivation for Using Ant Colony Optimization",
        content: `
            <p><h2>1.4 Motivation for Using Ant Colony Optimization</h2></p>
        `
    },
    {
        title: "Content",
        content: `
            <p>The Mixed Vehicle Routing Problem with Backhauls (MVRPB) and the Vehicle Routing Problem with Simultaneous Pickups and Deliveries (VRPSPD) are computationally challenging NP-hard extensions of the classical Capacitated Vehicle Routing Problem (CVRP).</p>
            
            <p><em> <strong>Key Challenges:</strong> Unlike standard VRP, these variants require handling both delivery and pickup operations within the same route. This creates bidirectional commodity flows and complex interdependencies between routing decisions and vehicle load dynamics.</p>
            <p></em> <strong>Limitations of Traditional Methods:</strong></p>
            <p>    <em> <strong>Construction Heuristics:</strong> Often produce suboptimal solutions due to greedy nature.</p>
            <p>    </em> <strong>Tabu Search (TS):</strong> Requires careful tuning and struggles with the intensification-diversification balance.</p>
            <p>    <em> <strong>Large Neighborhood Search (LNS):</strong> Can be computationally expensive with large destroy-repair neighborhoods.</p>
            <p>    </em> <strong>Genetic Algorithms (GA):</strong> Face challenges in designing crossover operators that preserve route feasibility.</p>
            
            <p><strong>Why ACO?</strong></p>
            <p>Ant Colony Optimization (ACO) offers a distinct paradigm:</p>
            <ol>
                <li><strong>Constructive Building:</strong> Ants build solutions incrementally, allowing for the natural incorporation of complex constraints (like capacity checks at every step).</li>
                <li><strong>Collective Learning:</strong> Pheromones act as long-term memory to capture successful routing patterns.</li>
                <li><strong>Heuristic Integration:</strong> It allows for the flexible integration of problem-specific heuristics (e.g., savings and load balancing) directly into the probabilistic construction.</li>
                <li><strong>Hybridization:</strong> It naturally pairs with local search for post-construction refinement.</li>
            </ol>
        `
    },
    {
        title: "SECTION 2: METHOD",
        content: `
            <p><h1>SECTION 2: METHOD</h1></p>
        `
    },
    {
        title: "2.1 Overview of Ant Colony Optimization",
        content: `
            <p><h2>2.1 Overview of Ant Colony Optimization</h2></p>
        `
    },
    {
        title: "Content",
        content: `
            <p><strong>1. Biological Inspiration</strong></p>
            
            <p>Ant Colony Optimization is inspired by the foraging behavior of real ant colonies, specifically their ability to discover shortest paths between a nest and food sources.</p>
            <p><em> <strong>Stigmergy:</strong> Ants communicate indirectly by depositing pheromone trails on the ground.</p>
            <p></em> <strong>Positive Feedback:</strong> Shorter paths allow faster traversal, leading to faster pheromone accumulation, which increases the probability of selection by subsequent ants.</p>
            <p><em> <strong>Negative Feedback (Evaporation):</strong> Pheromone evaporates over time, reducing the attractiveness of less viable paths and preventing premature convergence to suboptimal solutions.</p>
            
            <p>This biological phenomenon was translated into a computational metaheuristic by Dorigo and colleagues in the early 1990s. In this framework, the problem is modeled as a graph where nodes represent solution components (e.g., customers) and edges represent transitions.</p>
            
            <p><strong>2. General ACO Framework</strong></p>
            
            <p>The algorithm operates in iterative cycles consisting of three main phases:</p>
            
            <p><strong>a. Solution Construction Phase</strong></p>
            
            <p>$m$ artificial ants construct complete solutions step-by-step. Starting from an initial node (e.g., the depot), an ant $k$ at node $i$ selects the next node $j$ from the feasible neighborhood $N_i^k$ using a probabilistic transition rule.</p>
            
            <p>The probability $p_{ij}^k$ is typically a function of:</p>
            
            <ol>
                <li><strong>Pheromone Intensity ($\\tau_{ij}$):</strong> The learned desirability based on past experience.</li>
                <li><strong>Heuristic Visibility ($\\eta_{ij}$):</strong> Problem-specific greedy information (e.g., distance savings).</li>
            </ol>
            
            <p>The selection probability balances learned knowledge (exploitation) and heuristic guidance (exploration) controlled by parameters $\\alpha$ and $\\beta$.</p>
            
            <p><strong>b. Pheromone Update Phase</strong></p>
            
            <p>After solution construction, pheromone trails are updated. This process involves:</p>
            
            <ol>
                <li><strong>Evaporation:</strong> All pheromone values are reduced to "forget" poor decisions.</li>
            </ol>
            <p>$$\\tau_{ij} \\leftarrow (1 - \\rho) \\cdot \\tau_{ij}$$</p>
            <p>Where $\\rho \\in (0, 1]$ is the evaporation rate.</p>
            
            <ol>
                <li><strong>Reinforcement:</strong> Pheromone is deposited on edges belonging to good solutions. Different ACO variants use different strategies:</li>
            </ol>
            
            <p>    </em> <strong>Ant System (AS):</strong> All ants deposit pheromone.</p>
            <p>    <em> <strong>Ant Colony System (ACS):</strong> Only the best-so-far ant deposits pheromone.</p>
            <p>    </em> <strong>MAX-MIN Ant System (MMAS):</strong> Uses a rank-based approach (only top-ranked ants update) and imposes explicit bounds $[\\tau_{\\min}, \\tau_{\\max}]$ to maintain diversity.</p>
            
            <p><strong>c. Daemon Actions (Optional)</strong></p>
            
            <p>Centralized procedures executed at the end of an iteration, such as Local Search (e.g., 2-opt, swap) to improve the ant-constructed solutions. This hybridization is highly effective for routing problems.</p>
            
            <p><strong>3. ACO Applied to Vehicle Routing (VRP)</strong></p>
            
            <p>In VRP contexts, the graph nodes correspond to customers and the depot.</p>
            <p><em> Ants build routes by iteratively adding customers until constraints (capacity, time) are met, then returning to the depot to start a new route.</p>
            <p></em> Critical Design Decisions:</p>
            <p>  <em> <strong>Heuristic Information ($\\eta_{ij}$):</strong> Defines the greedy "attractiveness" of a move (e.g., savings, urgency).</p>
            <p>  </em> <strong>Constraint Handling:</strong> Ensuring capacity and precedence are respected during construction.</p>
            
            <p>For VRPPD (VRP with Pickup and Delivery) specifically, complexity increases because feasibility depends on the sequence of pickups and deliveries, not just total load26. Therefore, the heuristic information must guide ants toward sequences that are both distance-efficient and load-feasible.</p>
        `
    },
    {
        title: "2.2 The Ant Algorithm for VRPPD",
        content: `
            <p><h2>2.2 The Ant Algorithm for VRPPD</h2></p>
        `
    },
    {
        title: "2.2.1 Initialization",
        content: `
            <p><h3>2.2.1 Initialization</h3></p>
            
            <p>The initialization phase establishes the foundation for the ant colony to begin its search for optimal solutions. This critical step sets up the initial conditions that guide the entire optimization process.</p>
            
            <p><strong>Why Initialization Matters:</strong></p>
            
            <p><em> <strong>Balanced starting conditions</strong> enable effective exploration and exploitation throughout the optimization process</p>
            <p></em> <strong>Good initial bounds</strong> ($\\tau_{max}$ and $\\tau_{min}$ in MMAS) help maintain solution diversity</p>
            <p><em> <strong>Proper pheromone initialization</strong> prevents the algorithm from being biased toward poor solutions</p>
            
            <p><strong>1. Nearest-Neighbor Heuristic for Initial Solution</strong></p>
            
            <p>The initial solution is obtained using a <strong>nearest-neighbor (NN) heuristic</strong>:</p>
            
            <ol>
                <li><strong>Start at the depot</strong> (node 0)</li>
                <li><strong>Select the nearest feasible customer</strong> not yet visited as the next customer to visit</li>
                <li>A customer is <strong>feasible</strong> if visiting it next does not violate:</li>
            </ol>
            <p>   - Vehicle capacity constraint</p>
            <p>   - Maximum route length restriction (if any)</p>
            <ol>
                <li>If <strong>no feasible customer</strong> is available:</li>
            </ol>
            <p>   - Terminate the current route at the depot</p>
            <p>   - Start a new route from the depot</p>
            <ol>
                <li><strong>Repeat</strong> until all customers are serviced</li>
            </ol>
            
            <p><strong>Note:</strong> This heuristic does not guarantee feasibility if a limit on the number of vehicles is imposed.</p>
            
            <p>The total distance of this constructed solution becomes $L_0$.</p>
            
            <p><strong>2. Initial Pheromone Level ($\\tau_0$)</strong></p>
            
            <p>At the start of the algorithm, an initial amount of pheromone $\\tau_{0}$ is placed uniformly on each edge (arc) connecting nodes in the graph:</p>
            
            <p>$$\\tau_{ij} = \\tau_{0} = \\frac{n}{L_{0}}$$</p>
            
            <p>Where:</p>
            <p></em> $n$ is the number of customers</p>
            <p><em> $L_{0}$ is the length of the nearest-neighbor heuristic solution</p>
            <p></em> $\\tau_{ij}$ represents the pheromone level on the edge from node $i$ to node $j$</p>
            
            <p><strong>Rationale:</strong> Using $L_0$ from the NN heuristic provides:</p>
            <p><em> A quick and reasonable estimate of solution quality</p>
            <p></em> A basis for initializing pheromone levels appropriately</p>
            <p><em> A starting point that prevents premature convergence</p>
            
            <p><strong>3. Heuristic Information (Visibility) - Basic Concept</strong></p>
            
            <p>In the basic Ant System, the desirability (or visibility) between a pair of cities $i$ and $j$ is computed as the inverse of the distance between them:</p>
            
            <p>$$\\eta_{ij} = \\frac{1}{d_{ij}}$$</p>
            
            <p>Where $d_{ij}$ is the distance from customer $i$ to customer $j$. This simple heuristic guides ants to prefer closer customers.</p>
            
            <p>For VRPPD, however, more sophisticated heuristic information is used (described in detail in Section 2.2.2) that accounts for:</p>
            <p></em> Distance savings (enhanced savings function)</p>
            <p><em> Load considerations (dynamic load-based component)</p>
            
            <p><strong>4. Ant Placement</strong></p>
            
            <p>All $K$ artificial ants are initially placed at the depot to begin the search process. Each ant will independently construct a complete solution (set of routes).</p>
            
            <p><strong>5. Implementation in VRPPD Context</strong></p>
            
            <p>For the Vehicle Routing Problem with Pickups and Deliveries, the initialization must also consider:</p>
            <p></em> <strong>Vehicle capacity constraints</strong> that will be checked during route construction</p>
            <p><em> <strong>Delivery and pickup demands</strong> at each customer</p>
            <p></em> <strong>The depot</strong> as the mandatory starting and ending point for all routes</p>
            <ul>
                <li><strong>Dynamic load tracking</strong> as vehicles alternate between delivery and pickup operations</li>
            </ul>
        `
    },
    {
        title: "2.2.2 Heuristic Information Design ($\\eta_{ij}$)",
        content: `
            <p><h3>2.2.2 Heuristic Information Design ($\\eta_{ij}$)</h3></p>
            
            <p>The heuristic information (visibility function) for VRPPD consists of <strong>two main components</strong> that work together to guide ants toward high-quality solutions:</p>
            
            <p><strong>1. Enhanced Savings Function (First Component)</strong></p>
            
            <p>The first component uses an <strong>enhanced savings function</strong> that improves upon Paessens' parametrical savings formulation:</p>
            
            <p>$$S_{ij} = c_{i0} + c_{0j} - \\lambda c_{ij} + \\mu \\cos(\\theta_{ij}) |c_{0i} - c_{j0}|$$</p>
            
            <p>Where:</p>
            <p><em> $c_{i0}$ is the distance from customer $i$ to the depot</p>
            <p></em> $c_{0j}$ is the distance from the depot to customer $j$</p>
            <p><em> $c_{ij}$ is the distance between customers $i$ and $j$</p>
            <p></em> $\\theta_{ij}$ is the <strong>angle</strong> formed by the two rays originating from the depot and crossing customers $i$ and $j$</p>
            <p><em> $\\lambda$ and $\\mu$ are non-negative parameters (set to $\\lambda = \\mu = 1$)</p>
            
            <p><strong>Purpose:</strong> This savings function considers both the distance savings and the <strong>geometric distribution of customers</strong>, attempting to avoid circumferenced route formations.</p>
            
            <p><strong>2. Load-Based Component (Second Component)</strong></p>
            
            <p>The second component considers the <strong>vehicle load</strong> along the route. This component is particularly important for VRPPD:</p>
            
            <p>$$R_j = \\begin{cases} </p>
            <p>\\max\\left(\\frac{P_j}{\\bar{P}}, \\frac{D_j}{\\bar{D}}\\right) & \\text{if } \\min\\left(\\sum_{k \\in V_q} P_k, \\sum_{k \\in V_q} D_k\\right) > \\frac{Q}{2} \\\\</p>
            <p>1 & \\text{otherwise}</p>
            <p>\\end{cases}$$</p>
            
            <p>Where:</p>
            <p></em> $P_j$ is the pickup demand at customer $j$</p>
            <p><em> $D_j$ is the delivery demand at customer $j$</p>
            <p></em> $\\bar{P}$ is the average pickup demand across all customers</p>
            <p><em> $\\bar{D}$ is the average delivery demand across all customers</p>
            <p></em> $V_q$ is the set of customers already visited by vehicle $q$</p>
            <p><em> $Q$ is the vehicle capacity</p>
            
            <p><strong>Purpose:</strong> This component gives more selection chance to customers requiring <strong>larger delivery or pickup quantities</strong>. It is inspired by the "put first larger items" approach.</p>
            
            <p><strong>Activation Strategy:</strong> This component only activates after <strong>half of the vehicle capacity</strong> is used, allowing the distance-based heuristic to dominate in early route construction stages.</p>
            
            <p><strong>3. Combined Visibility Function</strong></p>
            
            <p>The final visibility function combines both components:</p>
            
            <p>$$\\eta_{ij} = S_{ij} \\times R_j$$</p>
            
            <p><strong>Key Advantages:</strong></p>
            <p></em> <strong>First component (Savings)</strong>: Acts as <strong>primary heuristic</strong> for building shorter routes</p>
            <p><em> <strong>Second component (Load-based)</strong>: Acts as <strong>secondary heuristic</strong> that kicks in when capacity becomes critical</p>
            <p></em> <strong>Static + Dynamic</strong>: $S_{ij}$ is static (precomputed), while $R_j$ is dynamic (depends on current vehicle load)</p>
            <ul>
                <li><strong>Problem-specific</strong>: Captures both the "delivery" and "pickup" nature of VRPPD</li>
            </ul>
        `
    },
    {
        title: "2.2.3 Route Construction",
        content: `
            <p><h3>2.2.3 Route Construction</h3></p>
            
            <p>The route construction phase is where each ant builds its solution by iteratively selecting customers to visit. This process uses the <strong>Ant Colony System (ACS) pseudo-random proportional rule</strong> combined with a <strong>candidate list</strong> strategy.</p>
            
            <p><strong>1. Construction Process Overview</strong></p>
            
            <p>Each ant constructs routes by:</p>
            <ol>
                <li>Starting from the depot</li>
                <li>Iteratively selecting the next customer to visit</li>
                <li>Returning to the depot when the route is complete</li>
                <li>Starting a new route if unvisited customers remain</li>
                <li>Continuing until all customers are serviced</li>
            </ol>
            
            <p><strong>2. Pseudo-Random Proportional Rule (ACS)</strong></p>
            
            <p>When ant $k$ is at customer $i$ and needs to select the next customer $j$:</p>
            
            <p>$$j = \\begin{cases}</p>
            <p>\\arg\\max_{u \\in N_i^k} \\{\\tau_{iu}^\\alpha \\cdot \\eta_{iu}^\\beta\\} & \\text{if } z \\leq z_0 \\text{ (exploitation)} \\\\</p>
            <p>J^k & \\text{if } z > z_0 \\text{ (exploration)}</p>
            <p>\\end{cases}$$</p>
            
            <p>Where:</p>
            <p><em> $z$ is a random variable from uniform distribution $U[0,1]$</p>
            <p></em> $z_0 \\in [0,1]$ is a <strong>control parameter</strong> (typically $z_0 = 0.7$)</p>
            <p><em> $N_i^k$ is the feasible neighborhood (unvisited customers that can be added without violating constraints)</p>
            <p></em> $J^k$ is selected according to the <strong>probabilistic rule</strong>:</p>
            
            <p>$$p_{ij}^k = \\begin{cases}</p>
            <p>\\frac{\\tau_{ij}^\\alpha \\cdot \\eta_{ij}^\\beta}{\\sum_{l \\in N_i^k} \\tau_{il}^\\alpha \\cdot \\eta_{il}^\\beta} & \\text{if } j \\in N_i^k \\\\</p>
            <p>0 & \\text{otherwise}</p>
            <p>\\end{cases}$$</p>
            
            <p><strong>Standard parameter values:</strong></p>
            <p><em> $\\alpha = 1$ (pheromone weight)</p>
            <p></em> $\\beta = 4$ (heuristic information weight)</p>
            <p><em> $z_0 = 0.7$ (exploitation probability)</p>
            
            <p><strong>Interpretation:</strong></p>
            <p></em> <strong>With probability $z_0 = 0.7$</strong>: Ant makes <strong>greedy choice</strong> (exploitation) - selects the customer with maximum $\\tau_{ij}^\\alpha \\cdot \\eta_{ij}^\\beta$</p>
            <p><em> <strong>With probability $1 - z_0 = 0.3$</strong>: Ant makes <strong>probabilistic choice</strong> (exploration) - selects according to probability distribution</p>
            <p></em> This balances <strong>intensification</strong> (exploiting known good solutions) and <strong>diversification</strong> (exploring new areas)</p>
            
            <p><strong>3. Candidate List Strategy</strong></p>
            
            <p>To improve computational efficiency, the algorithm uses a <strong>candidate list</strong>:</p>
            
            <p><em> $N_i^k$ consists of a <strong>limited number</strong> of customers with the <strong>largest attractiveness values</strong> ($\\phi_{ij} = \\tau_{ij}^\\alpha \\cdot \\eta_{ij}^\\beta$)</p>
            <p></em> <strong>Candidate list size</strong>: $s = n/5$, where $n$ is the number of customers</p>
            <p><em> Only these candidates are considered when selecting the next customer</p>
            <p></em> <strong>Benefit</strong>: Reduces computation from $O(n)$ to $O(n/5)$ per selection</p>
            
            <p><strong>4. Attractiveness Calculation</strong></p>
            
            <p>The attractiveness (also called <strong>combined value</strong>) is:</p>
            
            <p>$$\\phi_{ij} = \\tau_{ij}^\\alpha \\cdot \\eta_{ij}^\\beta$$</p>
            
            <p>Where:</p>
            <p><em> $\\tau_{ij}$ is the pheromone level on edge $(i,j)$</p>
            <p></em> $\\eta_{ij} = S_{ij} \\times R_j$ is the visibility function (from Section 2.2.2)</p>
            <p><em> The values of $\\alpha$ and $\\beta$ control relative importance</p>
            
            <p><strong>5. Feasibility Checking for VRPPD</strong></p>
            
            <p>Before adding customer $j$ to the current route, the algorithm verifies:</p>
            
            <p><strong>a) Capacity Constraint:</strong></p>
            <p></em> Total delivery demand on the route (including $j$) must not exceed $Q$</p>
            <p><em> Vehicle load at any point must satisfy: $0 \\leq \\text{Load} \\leq Q$</p>
            
            <p><strong>b) Load Feasibility (Critical for VRPPD):</strong></p>
            <p></em> At customer $j$: $\\text{Load}_{\\text{after}} = \\text{Load}_{\\text{arrival}} - D_j + P_j$</p>
            <p><em> Must ensure sufficient goods to deliver ($\\text{Load}_{\\text{arrival}} \\geq D_j$)</p>
            <p></em> Must ensure sufficient space to pickup ($\\text{Load}_{\\text{after}} \\leq Q$)</p>
            
            <p><strong>c) Maximum Route Length (if applicable):</strong></p>
            <p><em> If specified, the total distance/time of the route must not exceed the limit</p>
            
            <p><strong>6. Route Termination</strong></p>
            
            <p>A route ends when:</p>
            <p></em> No more feasible customers can be added (capacity or distance constraints)</p>
            <p><em> All customers have been visited</p>
            
            <p>The vehicle then returns to the depot, and a new route begins if needed.</p>
            
            <p><strong>7. Key Advantages of This Approach</strong></p>
            
            <p></em> <strong>Balanced search</strong>: ACS rule provides explicit control over exploration vs. exploitation</p>
            <p><em> <strong>Efficient</strong>: Candidate list reduces computational burden</p>
            <p></em> <strong>Flexible</strong>: Naturally incorporates complex VRPPD constraints during construction</p>
            <ul>
                <li><strong>Adaptive</strong>: Heuristic information changes dynamically based on current load</li>
            </ul>
        `
    },
    {
        title: "2.2.4 Local Search",
        content: `
            <p><h3>2.2.4 Local Search</h3></p>
            
            <p>After each ant constructs its tour, a <strong>local search procedure</strong> is applied to further improve the solution. This is a critical component that significantly enhances the performance of the ACO algorithm.</p>
            
            <p><strong>1. Purpose and Importance</strong></p>
            
            <p>Local search procedures:</p>
            <p><em> <strong>Improve solution quality</strong>: Reduce the total distance of routes constructed by ants</p>
            <p></em> <strong>Refine solutions</strong>: Find better configurations in the neighborhood of current solutions</p>
            <p><em> <strong>Enhance ACO performance</strong>: Incorporating local search significantly boosts ACO results</p>
            <p></em> <strong>Create hybrid metaheuristic</strong>: Combines global search (ACO) with local refinement (local search)</p>
            
            <p><strong>2. Sequential Application of Two Procedures</strong></p>
            
            <p>The algorithm applies two operators <strong>sequentially in order</strong>:</p>
            <ol>
                <li><strong>First</strong>: Apply SWAP procedure</li>
                <li><strong>Second</strong>: Apply MOVE procedure</li>
                <li><strong>Iterate</strong>: Until no further improvement is found</li>
            </ol>
            
            <p><strong>3. SWAP Procedure</strong></p>
            
            <p>The SWAP operator <strong>exchanges the positions of two customers</strong>:</p>
            
            <p><strong>a) Intra-route SWAP</strong> (within the same route):</p>
            <p><em> Given route: Depot → ... → $c_i$ → ... → $c_j$ → ... → Depot</p>
            <p></em> After swap: Depot → ... → $c_j$ → ... → $c_i$ → ... → Depot</p>
            <p><em> Checks if swapping reduces total route distance while maintaining feasibility</p>
            
            <p><strong>b) Inter-route SWAP</strong> (between different routes):</p>
            <p></em> Route 1: Depot → ... → $c_i$ → ... → Depot</p>
            <p><em> Route 2: Depot → ... → $c_j$ → ... → Depot</p>
            <p></em> After swap:</p>
            <p>  <em> Route 1: Depot → ... → $c_j$ → ... → Depot</p>
            <p>  </em> Route 2: Depot → ... → $c_i$ → ... → Depot</p>
            <p><em> Must verify capacity constraints for <strong>both routes</strong> after the exchange</p>
            
            <p><strong>4. MOVE Procedure</strong></p>
            
            <p>The MOVE operator <strong>removes a customer from one position and inserts it into another</strong>:</p>
            
            <p><strong>a) Intra-route MOVE</strong> (within the same route):</p>
            <p></em> Given route: Depot → ... → $c_i$ → ... → $c_j$ → ... → Depot</p>
            <p><em> Remove customer $c_i$ from its position</p>
            <p></em> Try inserting $c_i$ between every pair of consecutive customers</p>
            <p><em> Select the insertion that gives maximum distance reduction</p>
            
            <p><strong>b) Inter-route MOVE</strong> (between different routes):</p>
            <p></em> Remove customer $c_i$ from Route 1</p>
            <p><em> Try inserting $c_i$ at all feasible positions in Route 2</p>
            <p></em> Accept the move if it reduces total distance and maintains feasibility</p>
            
            <p><strong>5. Application Scope</strong></p>
            
            <p>These procedures are applied <strong>both within routes and between different routes</strong>:</p>
            <p><em> <strong>Within routes</strong>: Swap and Move operations within a single route (intra-route)</p>
            <p></em> <strong>Between routes</strong>: Swap and Move operations across different routes (inter-route)</p>
            
            <p><strong>6. Feasibility Verification for VRPPD</strong></p>
            
            <p>For each potential move (SWAP or MOVE), the algorithm must verify:</p>
            
            <p><strong>a) Capacity constraints:</strong></p>
            <p><em> Total delivery demand on each route ≤ vehicle capacity $Q$</p>
            
            <p><strong>b) Load feasibility at every customer:</strong></p>
            <p></em> At each customer along the route: $0 \\leq \\text{Load} \\leq Q$</p>
            <p><em> Load changes according to: $\\text{Load}_{\\text{after}} = \\text{Load}_{\\text{arrival}} - D_i + P_i$</p>
            
            <p><strong>c) Solution completeness:</strong></p>
            <p></em> All customers must remain served after the operation</p>
            
            <p><strong>7. Iteration Strategy</strong></p>
            
            <p>The local search continues iterating:</p>
            <p><em> Apply SWAP (intra + inter)</p>
            <p></em> Apply MOVE (intra + inter)</p>
            <p><em> Repeat until <strong>no improvement</strong> is found (local optimum reached)</p>
            
            <p><strong>8. Impact on Algorithm Performance</strong></p>
            
            <p>Local search:</p>
            <p></em> Significantly improves solution quality (typically 5-15% improvement)</p>
            <p><em> Is essential for ACO to be competitive with other metaheuristics</p>
            <p></em> The computational overhead is justified by quality gains</p>
            <p><em> Creates a powerful hybrid approach combining ACO's global search with local refinement</p>
            
            <p><strong>9. Integration with ACO</strong></p>
            
            <p>In the ACO framework:</p>
            <ol>
                <li>Each ant constructs a solution (Section 2.2.3)</li>
                <li><strong>Immediately after construction</strong>, local search improves the solution</li>
                <li>The <strong>improved solution</strong> is used for:</li>
            </ol>
            <p>   </em> Evaluating ant performance</p>
            <ul>
                <li>Pheromone update (Section 2.2.5)</li>
            <ol>
                <li>This ensures pheromone trails are deposited on high-quality solution components</li>
            </ul>
            </ol>
        `
    },
    {
        title: "2.2.5 Pheromone Update",
        content: `
            <p><h3>2.2.5 Pheromone Update</h3></p>
            
            <p>The pheromone update uses a sophisticated <strong>rank-based MMAS (Max-Min Ant System)</strong> strategy. This is the learning mechanism that allows the ant colony to accumulate and exploit experience from successful ants.</p>
            
            <p><strong>1. Overview of Pheromone Update</strong></p>
            
            <p>After all ants complete their route construction and local search, pheromone levels are updated through:</p>
            <ol>
                <li><strong>Evaporation</strong>: Reduces pheromone on all edges uniformly</li>
                <li><strong>Reinforcement</strong>: Adds pheromone to edges belonging to good solutions</li>
            </ol>
            
            <p>This completes the ACO cycle:</p>
            <ol>
                <li>Initialization (Section 2.2.1)</li>
                <li>Construction (Section 2.2.3)</li>
                <li>Local Search (Section 2.2.4)</li>
                <li><strong>Pheromone Update</strong> (this section)</li>
                <li>Repeat for next iteration</li>
            </ol>
            
            <p><strong>2. Rank-Based MMAS Update Rule</strong></p>
            
            <p>The update formula is:</p>
            
            <p>$$\\tau_{ij} \\leftarrow (1-\\rho)\\tau_{ij} + \\sum_{r=1}^{w} (w-r)\\Delta\\tau_{ij}^r + w\\Delta\\tau_{ij}^{gb}$$</p>
            
            <p>Where:</p>
            <p><em> $\\rho$ is the <strong>evaporation rate</strong> (typically $\\rho = 0.1$)</p>
            <p></em> $(1-\\rho)\\tau_{ij}$ represents pheromone remaining after evaporation</p>
            <p><em> $w$ is the <strong>number of best-ranked ants</strong> used for reinforcement</p>
            <p></em> $r$ is the <strong>rank</strong> of the ant ($r=1$ is the best ant in the iteration)</p>
            <p><em> $(w-r)$ is the <strong>weight</strong> given to ant $r$ (better ranks get more weight)</p>
            <p></em> $\\Delta\\tau_{ij}^r = 1/L^r$ for all edges $(i,j)$ belonging to the tour of the $r$-th best ant</p>
            <p><em> $L^r$ is the length of the tour built by the $r$-th best ant</p>
            <p></em> $gb$ denotes the <strong>global-best ant</strong> (best solution found so far)</p>
            <p><em> $\\Delta\\tau_{ij}^{gb} = 1/L^{gb}$ for edges in the global-best tour</p>
            <p></em> $L^{gb}$ is the length of the global-best tour</p>
            
            <p><strong>3. Standard Parameter Values</strong></p>
            
            <p><strong>Key parameter values:</strong></p>
            <p><em> <strong>Evaporation rate</strong>: $\\rho = 0.1$</p>
            <p></em> <strong>Number of ranked ants</strong>: $w = n/10$ (where $n$ is number of customers)</p>
            <p><em> <strong>Global-best weight</strong>: $w$ (same as the number of ranked ants)</p>
            
            <p><strong>4. Pheromone Bounds (MMAS Feature)</strong></p>
            
            <p>If the pheromone level on any arc drops below an explicit lower limit or exceeds an explicit upper limit, it is set equal to that limit:</p>
            
            <p>$$\\text{If } \\tau_{ij} < \\tau_{\\min} \\text{ then } \\tau_{ij} = \\tau_{\\min}$$</p>
            <p>$$\\text{If } \\tau_{ij} > \\tau_{\\max} \\text{ then } \\tau_{ij} = \\tau_{\\max}$$</p>
            
            <p><strong>Bounds calculation:</strong></p>
            <p></em> $\\tau_{\\max} = \\frac{n}{\\rho \\cdot L^{gb}}$ (dynamically updated as $L^{gb}$ improves)</p>
            <p><em> $\\tau_{\\min} = \\frac{\\rho \\cdot \\tau_{\\max}}{50}$ (using a factor of 50)</p>
            
            <p>Where $n$ is the number of customers.</p>
            
            <p><strong>5. Purpose of Each Component</strong></p>
            
            <p><strong>a) Evaporation $(1-\\rho)\\tau_{ij}$:</strong></p>
            <p></em> <strong>Forgets poor decisions</strong>: Reduces influence of less-traveled edges</p>
            <p><em> <strong>Prevents premature convergence</strong>: Allows new solutions to emerge</p>
            <p></em> <strong>Maintains exploration</strong>: Balances with reinforcement</p>
            <p><em> Lower $\\rho = 0.1$ means <strong>slower forgetting</strong>, more exploitation</p>
            
            <p><strong>b) Rank-Based Reinforcement $\\sum_{r=1}^{w}(w-r)\\Delta\\tau_{ij}^r$:</strong></p>
            <p></em> Only <strong>$w$ best ants</strong> in current iteration deposit pheromone</p>
            <p><em> Better-ranked ants deposit <strong>more pheromone</strong> (weight $w-r$)</p>
            <p></em> Focuses learning on high-quality solutions</p>
            <p><em> Reduces noise from poor solutions</p>
            
            <p><strong>c) Global-Best Reinforcement $w\\Delta\\tau_{ij}^{gb}$:</strong></p>
            <p></em> <strong>Best-so-far solution</strong> always deposits pheromone</p>
            <p><em> Gets <strong>highest weight</strong> ($w$)</p>
            <p></em> Provides strong guidance toward best-known solution</p>
            <p><em> Promotes exploitation of proven good routes</p>
            
            <p><strong>d) MIN-MAX Bounds $[\\tau_{\\min}, \\tau_{\\max}]$:</strong></p>
            <p></em> $\\tau_{\\max}$: Prevents any edge from becoming <strong>too dominant</strong></p>
            <p><em> $\\tau_{\\min}$: Ensures all edges retain <strong>some attractiveness</strong></p>
            <p></em> Allows recovery from suboptimal convergence</p>
            <p><em> Maintains diversity throughout the search</p>
            
            <p><strong>6. Why Rank-Based MMAS?</strong></p>
            
            <p>The aim in using this MMAS approach is to <strong>reduce the risk of premature convergence</strong>.</p>
            
            <p>Advantages:</p>
            <p></em> <strong>Better than basic AS</strong>: Not all ants update (only top $w$)</p>
            <p><em> <strong>Better than ACS</strong>: Uses multiple good ants, not just one</p>
            <p></em> <strong>Combines iteration-best and global-best</strong>: Balances current exploration with historical best</p>
            <p><em> <strong>Bounded pheromones</strong>: Prevents stagnation and maintains diversity</p>
            <p></em> <strong>Proportional reinforcement</strong>: Better solutions get more pheromone</p>
            
            <p><strong>7. Update Frequency</strong></p>
            
            <p>Pheromone update occurs:</p>
            <p><em> <strong>Once per iteration</strong> after all $K$ ants have constructed their solutions</p>
            <p></em> After local search has improved the solutions</p>
            <p><em> Using the <strong>improved solution lengths</strong> for calculating $\\Delta\\tau$</p>
            
            <p><strong>8. Computational Complexity</strong></p>
            
            <p></em> <strong>Evaporation</strong>: $O(n^2)$ - update all edges</p>
            <p><em> <strong>Reinforcement</strong>: $O(w \\cdot m)$ - for $w$ ranked ants and $m$ edges per tour</p>
            <p></em> <strong>MIN-MAX clamping</strong>: $O(n^2)$ - check all edges</p>
            <ul>
                <li><strong>Total</strong>: $O(n^2)$ per iteration, acceptable overhead</li>
            </ul>
            
            
            <p><strong>9. Parameter Summary</strong></p>
            
            <p>| Parameter | Value | Purpose |</p>
            <p>|-----------|-------|---------|</p>
            <p>| $\\rho$ | 0.1 | Evaporation rate |</p>
            <p>| $w$ | $n/10$ | Number of ranked ants |</p>
            <p>| $\\tau_{\\max}$ | $n/(\\rho \\cdot L^{gb})$ | Upper pheromone bound |</p>
            <p>| $\\tau_{\\min}$ | $\\rho \\tau_{\\max}/50$ | Lower pheromone bound |</p>
            <p>| Global-best weight | $w$ | Weight for best-so-far solution |</p>
        `
    },
    {
        title: "SECTION 3: IMPLEMENTATION",
        content: `
            <p><h1>SECTION 3: IMPLEMENTATION</h1></p>
        `
    },
    {
        title: "ACO Class Implementation",
        content: `
            <p><h2>ACO Class Implementation</h2></p>
        `
    },
    {
        title: "Explanation of the \`AntColonyOptimizer\` Class",
        content: `
            <p><h3>Explanation of the \`AntColonyOptimizer\` Class</h3></p>
            
            <p>The \`AntColonyOptimizer\` class is constructed to solve the <strong>Vehicle Routing Problem with Simultaneous Pickups and Deliveries (VRPSPD)</strong>. The objective is to minimize the total travel distance of vehicles while serving all customers from a single depot. The core algorithm is <strong>Ant Colony Optimization (ACO)</strong> [18].</p>
            
            <p><strong>1. Initialization (\`__init__\`)</strong></p>
            
            <p><em> <strong>Parameters:</strong> Includes the number of ants (\`num_ants\`), number of iterations (\`num_iterations\`), coefficients \`alpha\` ($\\alpha$), \`beta\` ($\\beta$), evaporation rate (\`evaporation_rate\` - $\\rho$), and problem details (distance matrix, demands, vehicle capacity).</p>
            
            <p></em> <strong>Pheromone Matrix ($\\tau_{ij}$):</strong> Stores the "experience" of the ant colony regarding the quality of the edge $(i,j)$. In the MAX-MIN Ant System (MMAS) implementation, pheromones are typically initialized with an initial $\\tau_{max}$ value. The $\\tau_{max}$ value can be estimated based on $L_0$ (the route length from an initial heuristic, e.g., Nearest Neighbor - NN), following the formula (similar to Eq. 6 in Çatay's paper, with $L^<em>$ being $L_0$):</p>
            
            <p>  $$\\tau_{max\\_initial} = \\frac{1}{\\rho \\cdot L_0}$$</p>
            
            <p>  The $\\tau_{min}$ value is calculated as a fraction of $\\tau_{max}$:</p>
            
            <p>  $$\\tau_{min} = \\frac{\\tau_{max}}{\\text{factor}} \\quad \\text{or} \\quad \\tau_{min} = \\text{factor}_{\\text{min}} \\cdot \\tau_{max\\_initial}$$</p>
            
            <p>  (In the code, \`self.tau_max_val\` and \`self.tau_min_val\` are calculated based on \`nn_l0\` and corresponding \`factor\`s).</p>
            
            
            <p><strong>2. Visibility Function (Heuristic - $\\eta_{ij}$)</strong></p>
            
            <p></em> <strong>Role:</strong> Provides heuristic information to guide ants in selecting more promising edges. This value is computed in \`_calculate_static_visibility\`.</p>
            
            <p><em> <strong>Formula (per Çatay, 2007 for VRPPD):</strong> The visibility $\\eta_{ij}$ between node $i$ and node $j$ is proposed as (Eq. 22):</p>
            
            <p>  $$\\eta_{ij} = S_{ij} \\cdot R_j$$</p>
            <p>  Where:</p>
            
            <p>  </em> $S_{ij}$ is the <strong>Enhanced Savings Function</strong> (Eq. 23):</p>
            <p>  $$S_{ij} = c_{i0} + c_{0j} - \\lambda c_{ij} + \\mu \\cos(\\theta_{ij})|c_{i0} - c_{j0}|$$</p>
            
            <p>    $c_{i0}$: distance from customer $i$ to depot (0). $c_{0j}$: distance from depot to customer $j$. $c_{ij}$: direct distance from $i$ to $j$.$\\lambda, \\mu$: weighting parameters (set to 1.0 in the code). $\\theta_{ij}$: angle between vector (depot, $i$) and vector (depot, $j$). (The code implements the calculation of $S_{ij}$ in \`_calculate_static_visibility\`).</p>
            
            <p>  <em> $R_j$ is the <strong>Load Consideration Factor</strong> (Eq. 24):</p>
            <p>  $$R_j = \\begin{cases} \\max\\left(\\frac{P_j}{\\bar{P}}, \\frac{D_j}{\\bar{D}}\\right) & \\text{if } \\min\\left(\\sum P_{\\text{route}}, \\sum D_{\\text{route}}\\right) > Q/2 \\\\ 1 & \\text{otherwise} \\end{cases}$$</p>
            <p>  $P_j, D_j$: pickup/delivery demand of customer $j$. $\\bar{P}, \\bar{D}$: average pickup/delivery demand. $Q$: vehicle capacity.$\\sum P_{\\text{route}}, \\sum D_{\\text{route}}$: total pickup/delivery demand served or remaining on the route. </em>(Note: In the current code version, $R_j$ is simplified and assumed to be 1 in \`_calculate_probabilities\`. A full implementation of $R_j$ could be a future improvement).<em></p>
            
            <p><strong>3. Solution Construction and Node Selection (\`_construct_solution_one_ant\`, \`_calculate_probabilities\`, \`_select_next_node\`)</strong></p>
            
            <p></em> Each ant constructs a set of routes. VRPSPD constraints (vehicle load, capacity) are strictly checked in \`_calculate_probabilities\` to ensure feasibility.</p>
            
            <p><em> <strong>Transition Probability:</strong> The probability that ant $k$ currently at node $i$ chooses to move to node $j$ (if $j$ is a feasible neighbor $N_i^k$) is calculated using the standard ACO formula (similar to Eq. 1 in the paper):</p>
            
            <p>  $$p_{ij}^k(t) = \\frac{[\\tau_{ij}(t)]^\\alpha \\cdot [\\eta_{ij}]^\\beta}{\\sum_{l \\in N_i^k} [\\tau_{il}(t)]^\\alpha \\cdot [\\eta_{il}]^\\beta}, \\quad \\text{if } j \\in N_i^k$$</p>
            
            <p>  $\\tau_{ij}(t)$: amount of pheromone on edge $(i,j)$ at time $t$. $\\eta_{ij}$: heuristic value of edge $(i,j)$. $\\alpha, \\beta$: parameters controlling the relative weight of pheromone and heuristic. (This logic is expressed in \`_calculate_probabilities\`).</p>
            
            <p></em> <strong>Node Selection Rule (ACS style):</strong> Implemented in \`_select_next_node\`, using the parameter \`q0\`. With probability $q_0$ (exploitation):</p>
            
            <p>  $$j = \\arg\\max_{u \\in N_i^k} \\{[\\tau_{iu}(t)]^\\alpha \\cdot [\\eta_{iu}]^\\beta\\}$$</p>
            
            <p>  The ant selects the node $j$ with the maximum combined value $(\\tau^\\alpha \\cdot \\eta^\\beta)$ among feasible nodes. With probability $1-q_0$ (biased exploration): The ant selects node $j$ based on the probability distribution $p_{ij}^k(t)$ above. <em>(Note: The argmax formula in Eq. 8 of the ACS paper is slightly different: $[\\tau_{iu}(t)] \\cdot [\\eta_{iu}]^\\beta$. The current code uses $[\\tau_{iu}(t)]^\\alpha \\cdot [\\eta_{iu}]^\\beta$ for exploitation as well, which is a common variant)</em>.</p>
            
            <p><strong>4. Pheromone Update (\`_update_pheromones\`)</strong></p>
            
            <p><em> After each iteration, pheromones are updated according to the MMAS strategy.</p>
            
            <p></em> <strong>Evaporation:</strong> The amount of pheromone on all edges decreases by a ratio $\\rho$ (\`evaporation_rate\`):</p>
            <p>  $$\\tau_{ij}(t+1) = (1-\\rho)\\tau_{ij}(t)$$</p>
            
            <p><em> <strong>Deposit:</strong> Only the ant that finds the best solution (e.g., iteration-best or global-best $L_{best}$) is allowed to deposit pheromone on the edges it traversed. The amount of deposited pheromone $\\Delta\\tau_{ij}^{best}$ is typically:</p>
            
            <p>  $$\\Delta\\tau_{ij}^{best} = \\frac{1}{L_{best}}$$</p>
            <p>  (Or $Q_{const}/L_{best}$; in the current code \`pheromone_add_amount = 1.0 / reinforce_dist\`). Then, the new pheromone level is:</p>
            <p>  $$\\tau_{ij}(t+1) \\leftarrow \\tau_{ij}(t+1) + \\Delta\\tau_{ij}^{best}$$</p>
            
            <p></em> <strong>Pheromone Limits (MMAS):</strong> To avoid premature convergence and maintain diversity, the pheromone amount on each edge is clamped within the range $[\\tau_{min}, \\tau_{max}]$:</p>
            
            <p>  $$\\tau_{ij}(t+1) = \\begin{cases} \\tau_{max} & \\text{if } \\tau_{ij}(t+1) > \\tau_{max} \\\\ \\tau_{min} & \\text{if } \\tau_{ij}(t+1) < \\tau_{min} \\\\ \\tau_{ij}(t+1) & \\text{otherwise} \\end{cases}$$</p>
            <p>  The value $\\tau_{max}$ can be updated based on the length of the global best solution $L_{gb}$ found so far (similar to Eq. 6 in the paper):</p>
            <p>  $$\\tau_{max}(t+1) = \\frac{1}{\\rho \\cdot L_{gb}(t+1)}$$</p>
            <p>  <em>(The code updates \`self.tau_max_val\` and \`self.tau_min_val\` when $L_{gb}$ is improved)</em>.</p>
            
            <p><strong>5. Nearest-neighbor heuristic(\`_robust_nn_heuristic\`)</strong></p>
            
            <ul>
                <li>A simple heuristic function used to calculate an initial $L_0$ value. This $L_0$ is primarily used to initialize $\\tau_{max}$ and $\\tau_{min}$ values more reasonably and does not necessarily have to be a feasible VRPSPD solution.</li>
            </ul>
            
            <p>This implementation combines fundamental ACO principles with enhancements from Ant Colony System (ACS) and MAX-MIN Ant System (MMAS) to address the VRPSPD.</p>
        `
    },
    {
        title: "Implementation Code",
        content: `
            <pre style="background: #f5f5f5; padding: 1rem; border-radius: 4px; overflow-x: auto; font-size: 0.75rem;"><code class="language-python">%pip install openpyxl</code></pre>
        `
    },
    {
        title: "Implementation Code",
        content: `
            <pre style="background: #f5f5f5; padding: 1rem; border-radius: 4px; overflow-x: auto; font-size: 0.75rem;"><code class="language-python">import numpy as np
import csv
import matplotlib.pyplot as plt
import os
import openpyxl
from openpyxl import Workbook
import math
import random

class AntColonyOptimizer:
    def __init__(self, num_ants, num_iterations, alpha, beta, evaporation_rate,
                 pheromone_deposit_weight,
                 n_customers, coordinates, distance_matrix,
                 demand_delivery, demand_pickup, vehicle_capacity,
                 nn_l0=None,
                 tau_min_factor=0.01, tau_max_factor=10.0,
                 q0=0.7,
                 w_rank=5):
        self.num_ants = num_ants
        self.num_iterations = num_iterations
        self.alpha = alpha
        self.beta = beta
        self.evaporation_rate = evaporation_rate
        self.pheromone_deposit_weight = pheromone_deposit_weight # Used for pheromone deposit amount (1/L)
        self.n_customers = n_customers
        self.coordinates = coordinates
        self.distance_matrix = distance_matrix
        self.demand_delivery = np.array(demand_delivery)
        self.demand_pickup = np.array(demand_pickup)
        self.vehicle_capacity = vehicle_capacity
        self.depot_coord = self.coordinates[0]

        self.lambda_savings = 1.0 # Parameter for savings function
        self.mu_savings = 1.0     # Parameter for savings function

        valid_deliveries = self.demand_delivery[1:][self.demand_delivery[1:] &gt; 0]
        valid_pickups = self.demand_pickup[1:][self.demand_pickup[1:] &gt; 0]
        self.avg_delivery_demand = np.mean(valid_deliveries) if len(valid_deliveries) &gt; 0 else 1.0
        self.avg_pickup_demand = np.mean(valid_pickups) if len(valid_pickups) &gt; 0 else 1.0

        # Initialize pheromone, tau_min, tau_max
        self.tau_min_factor_init = tau_min_factor
        self.tau_max_factor_init = tau_max_factor

        # nn_l0 is passed from outside (result of _robust_nn_heuristic)
        if nn_l0 and nn_l0 &gt; 0 and nn_l0 != float(&#x27;inf&#x27;):
            self.tau_max_val = (1.0 / (self.evaporation_rate * nn_l0)) # Renamed for clarity
            self.tau_min_val = self.tau_max_val * self.tau_min_factor_init
        else: # Fallback if NN fails or is not provided
            # Estimate average total distance if visiting all customers once
            avg_dist_per_customer = np.mean(self.distance_matrix[self.distance_matrix &gt; 0]) if np.any(self.distance_matrix &gt; 0) else 10.0
            estimated_total_dist = avg_dist_per_customer * (self.n_customers -1) # -1 because of depot
            if estimated_total_dist &lt;=0 : estimated_total_dist = 500 # Fallback if no valid distance exists

            self.tau_max_val = (1.0 / (self.evaporation_rate * estimated_total_dist)) * self.tau_max_factor_init # Scale with additional factor
            self.tau_min_val = self.tau_max_val * self.tau_min_factor_init
            if self.tau_max_val &lt;=0 or self.tau_min_val &lt;=0 or self.tau_max_val &lt;= self.tau_min_val: # Ensure positive values and a gap
                fallback_pheromone = 1.0 / (self.n_customers * 100) # Final fallback
                self.tau_max_val = fallback_pheromone * 10
                self.tau_min_val = fallback_pheromone * 0.1


        self.pheromone_matrix = np.full((n_customers, n_customers), self.tau_max_val) # MMAS init
        np.fill_diagonal(self.pheromone_matrix, 0)

        self.q0 = q0

        self.visibility_matrix = np.zeros((n_customers, n_customers))
        for i in range(n_customers):
            for j in range(n_customers):
                if i != j:
                    self.visibility_matrix[i][j] = self._calculate_static_visibility(i, j)

    def _calculate_static_visibility(self, i, j):
        # Calculate S_ij (savings function)
        if i == j: return 0.0
        if j == 0: return 1.0 / (self.distance_matrix[i][0] + 1e-9) # Return to depot, 1e-9 avoids division by zero
        if i == 0: return 1.0 / (self.distance_matrix[0][j] + 1e-9) # From depot

        c_i0 = self.distance_matrix[i][0]
        c_0j = self.distance_matrix[0][j]
        c_ij = self.distance_matrix[i][j]

        xi, yi = self.coordinates[i][0] - self.depot_coord[0], self.coordinates[i][1] - self.depot_coord[1]
        xj, yj = self.coordinates[j][0] - self.depot_coord[0], self.coordinates[j][1] - self.depot_coord[1]

        dot_product = xi * xj + yi * yj
        mag_i = math.sqrt(xi**2 + yi**2)
        mag_j = math.sqrt(xj**2 + yj**2)

        cos_theta_ij = 0.0
        if mag_i * mag_j &gt; 1e-9: # Avoid division by zero if point overlaps with depot
            cos_theta_ij = max(-1.0, min(1.0, dot_product / (mag_i * mag_j)))
        elif i != 0 and j != 0 : cos_theta_ij = 1.0

        savings_s_ij = c_i0 + c_0j - self.lambda_savings * c_ij + \\
                       self.mu_savings * cos_theta_ij * abs(c_i0 - c_0j)

        return max(savings_s_ij, 1e-9) # Ensure visibility is positive

    def _calculate_probabilities(self, current_node_idx, visited_on_current_route,
                                 unvisited_globally_set,
                                 current_physical_load_on_vehicle,
                                 current_total_deliveries_for_route):
        # Calculate selection probabilities, check VRPSPD constraints
        probabilities_info = []
        denominator = 0.0

        for next_potential_node_j in unvisited_globally_set:
            if next_potential_node_j in visited_on_current_route: continue # Skip if already visited on this route

            # --- Check capacity constraints ---
            # 1. Total D of route (if adding j) &lt;= Vehicle Capacity?
            prospective_total_deliveries = current_total_deliveries_for_route + self.demand_delivery[next_potential_node_j]
            if prospective_total_deliveries &gt; self.vehicle_capacity:
                continue

            # 2. Is the load on the vehicle after serving j valid?
            load_on_arrival_at_j = 0.0
            if current_node_idx == 0: # From depot to first customer j
                load_on_arrival_at_j = prospective_total_deliveries # Vehicle carries all D load for the route (including j)
            else: # From customer i (current_node_idx) to customer j
                load_on_arrival_at_j = current_physical_load_on_vehicle # Load after leaving i is load upon arrival at j

            # Check if there is enough cargo to deliver at j (D_j must be &lt;= remaining cargo on vehicle)
            # This is implied if load_on_arrival_at_j is calculated correctly and load_after_servicing_j &gt;= 0

            load_after_servicing_j = load_on_arrival_at_j - self.demand_delivery[next_potential_node_j] + self.demand_pickup[next_potential_node_j]

            if not (0 &lt;= load_after_servicing_j &lt;= self.vehicle_capacity):
                continue
            # --- End of capacity constraints check ---

            tau_val = self.pheromone_matrix[current_node_idx][next_potential_node_j] ** self.alpha
            eta_val = self.visibility_matrix[current_node_idx][next_potential_node_j] ** self.beta # R_j temporarily = 1

            if tau_val * eta_val &gt; 1e-9: # Avoid extremely small values
                probabilities_info.append({&#x27;node&#x27;: next_potential_node_j, &#x27;value&#x27;: tau_val * eta_val, &#x27;prob&#x27;: 0.0})
                denominator += tau_val * eta_val

        if not probabilities_info: return []

        if denominator &lt; 1e-9: # If total value is too small, choose uniformly random
            prob_val = 1.0 / len(probabilities_info)
            for item in probabilities_info: item[&#x27;prob&#x27;] = prob_val
        else:
            for item in probabilities_info: item[&#x27;prob&#x27;] = item[&#x27;value&#x27;] / denominator

        return probabilities_info

    def _select_next_node(self, probabilities_info):
        # Select next node using pseudo-random proportional rule (ACS)
        if not probabilities_info: return -1

        if random.random() &lt; self.q0: # Exploitation
            # Sort descending by &#x27;value&#x27;, pick the first node
            # Ensure no error if list is empty (checked above)
            best_node_val = -float(&#x27;inf&#x27;)
            selected_node = -1
            for p_info in probabilities_info:
                if p_info[&#x27;value&#x27;] &gt; best_node_val:
                    best_node_val = p_info[&#x27;value&#x27;]
                    selected_node = p_info[&#x27;node&#x27;]
            return selected_node
        else: # Exploration (roulette wheel)
            rand_val = random.random()
            cumulative_prob = 0.0
            # Sort probabilities_info to ensure consistent order when rand_val is very small (Optional)
            # probabilities_info.sort(key=lambda x: x[&#x27;node&#x27;])
            for p_info in probabilities_info:
                cumulative_prob += p_info[&#x27;prob&#x27;]
                if rand_val &lt;= cumulative_prob + 1e-9 : # Add small epsilon for float stability
                    return p_info[&#x27;node&#x27;]
        return probabilities_info[-1][&#x27;node&#x27;] if probabilities_info else -1


    def _construct_solution_one_ant(self):
        # Construct solution (set of routes) for one ant
        ant_all_routes_sol = []
        ant_total_dist_sol = 0.0
        unvisited_customers_globally = set(range(1, self.n_customers))
        num_vehicles_this_ant = 0

        while unvisited_customers_globally:
            num_vehicles_this_ant += 1
            if num_vehicles_this_ant &gt; self.n_customers * 2 : # Limit number of vehicles
                return ([], float(&#x27;inf&#x27;))

            current_vehicle_path = [0]
            current_node_in_path = 0

            current_route_total_D = 0.0 # Total D for customers on this vehicle&#x27;s current route
            current_phys_load = 0.0     # Physical load on vehicle AFTER leaving current_node_in_path

            route_dist_this_vehicle = 0.0

            can_add_to_this_vehicle_route = True
            while can_add_to_this_vehicle_route:
                can_add_to_this_vehicle_route = False

                probs_info = self._calculate_probabilities(
                    current_node_in_path,
                    set(current_vehicle_path), # Nodes visited on this route
                    unvisited_customers_globally, # Nodes not served by any vehicle
                    current_phys_load,
                    current_route_total_D
                )

                if not probs_info:
                    break # No feasible nodes left for this vehicle, end this route

                selected_next_node = self._select_next_node(probs_info)

                if selected_next_node != -1:
                    delivery_at_selected = self.demand_delivery[selected_next_node]
                    pickup_at_selected = self.demand_pickup[selected_next_node]

                    # Update total D for this route (including selected_next_node)
                    current_route_total_D += delivery_at_selected

                    # Update physical load on vehicle (to load AFTER serving selected_next_node)
                    load_arriving_at_selected = 0.0
                    if current_node_in_path == 0: # From depot to first customer
                        load_arriving_at_selected = current_route_total_D # Load equals total D of route
                    else: # From previous customer
                        load_arriving_at_selected = current_phys_load # Load equals load after leaving previous node

                    current_phys_load = load_arriving_at_selected - delivery_at_selected + pickup_at_selected

                    # Add to route
                    current_vehicle_path.append(selected_next_node)
                    route_dist_this_vehicle += self.distance_matrix[current_node_in_path][selected_next_node]

                    current_node_in_path = selected_next_node
                    if selected_next_node in unvisited_customers_globally: # Ensure removal only if still in global set
                        unvisited_customers_globally.remove(selected_next_node)

                    can_add_to_this_vehicle_route = True # Continue attempting to add customers
                else:
                    break # Could not select next node

            if len(current_vehicle_path) &gt; 1: # If route has at least 1 customer
                route_dist_this_vehicle += self.distance_matrix[current_node_in_path][0] # Return to depot
                current_vehicle_path.append(0)
                ant_all_routes_sol.append(current_vehicle_path)
                ant_total_dist_sol += route_dist_this_vehicle
            elif not unvisited_customers_globally: # Added nothing but no customers left
                break
            # If nothing could be added to this vehicle but unvisited_customers_globally remains
            # while loop will attempt to dispatch new vehicle (num_vehicles_this_ant increases)

        if unvisited_customers_globally: # Did not serve all customers
            # print(f&quot;DEBUG: Ant finished but {len(unvisited_customers_globally)} customers remain unvisited.&quot;)
            return ([], float(&#x27;inf&#x27;))

        return (ant_all_routes_sol, ant_total_dist_sol)

    def _update_pheromones(self, all_ant_solutions_iter, best_overall_sol_info):
        # Update pheromones according to MMAS
        self.pheromone_matrix *= (1 - self.evaporation_rate) # Evaporation

        reinforce_routes, reinforce_dist = None, float(&#x27;inf&#x27;)

        if all_ant_solutions_iter: # Find best ant in this iteration
            iter_best_r, iter_best_d = min(all_ant_solutions_iter, key=lambda x: x[1])
            if iter_best_d &lt; reinforce_dist:
                reinforce_routes, reinforce_dist = iter_best_r, iter_best_d

        if best_overall_sol_info and best_overall_sol_info[1] &lt; reinforce_dist: # Compared to global best ant
            reinforce_routes, reinforce_dist = best_overall_sol_info

        if reinforce_routes and reinforce_dist != float(&#x27;inf&#x27;) and reinforce_dist &gt; 0: # Update only if there is a good solution and distance &gt; 0
            pheromone_add_amount = 1.0 / reinforce_dist # Pheromone amount deposited
            for route in reinforce_routes:
                for i in range(len(route) - 1):
                    u, v = route[i], route[i+1]
                    # Accumulate controlled by tau_max
                    self.pheromone_matrix[u][v] = min(self.tau_max_val, self.pheromone_matrix[u][v] + pheromone_add_amount)
                    self.pheromone_matrix[v][u] = min(self.tau_max_val, self.pheromone_matrix[v][u] + pheromone_add_amount)

        # Apply Tau_min to all edges, ensuring not less than tau_min
        self.pheromone_matrix[self.pheromone_matrix &lt; self.tau_min_val] = self.tau_min_val
        np.fill_diagonal(self.pheromone_matrix, 0) # Main diagonal is always 0

    def _robust_nn_heuristic(self, start_node=0):
        # Simple NN heuristic (TSP-like) to obtain L0, ignoring capacity/VRPSPD constraints
        # Main purpose is to get an initial length estimate, not necessarily feasible for VRPSPD
        if self.n_customers &lt;= 1: return ([[]], 0.0)

        unvisited_nodes = list(range(1, self.n_customers)) # Only customers
        if not unvisited_nodes: return ([[start_node, start_node]], 0.0) # Only depot

        current_nn_node = start_node
        nn_tour = [current_nn_node]
        nn_tour_length = 0.0

        while unvisited_nodes:
            nearest_distance = float(&#x27;inf&#x27;)
            next_candidate_node = -1
            for neighbor_node in unvisited_nodes:
                if self.distance_matrix[current_nn_node][neighbor_node] &lt; nearest_distance:
                    nearest_distance = self.distance_matrix[current_nn_node][neighbor_node]
                    next_candidate_node = neighbor_node

            if next_candidate_node != -1:
                nn_tour.append(next_candidate_node)
                nn_tour_length += nearest_distance
                current_nn_node = next_candidate_node
                unvisited_nodes.remove(next_candidate_node)
            else: # graph not connected for remaining nodes
                return ([[]], float(&#x27;inf&#x27;))

        # Return to depot
        nn_tour_length += self.distance_matrix[current_nn_node][start_node]
        nn_tour.append(start_node)

        return [nn_tour], nn_tour_length


    def optimize(self):
        best_overall_routes_data = []
        best_overall_dist_data = float(&#x27;inf&#x27;)

        for iteration in range(self.num_iterations):
            all_ant_solutions_current_iter = []
            for _ in range(self.num_ants):
                # Each ant constructs a new solution from scratch
                routes_ant, distance_ant = self._construct_solution_one_ant()
                if distance_ant != float(&#x27;inf&#x27;): # Add only feasible solutions
                    all_ant_solutions_current_iter.append((routes_ant, distance_ant))

            current_iter_best_routes, current_iter_best_dist = None, float(&#x27;inf&#x27;)
            if all_ant_solutions_current_iter:
                current_iter_best_routes, current_iter_best_dist = min(all_ant_solutions_current_iter, key=lambda x: x[1])

                if current_iter_best_dist &lt; best_overall_dist_data:
                    best_overall_routes_data = current_iter_best_routes
                    best_overall_dist_data = current_iter_best_dist
                    # Update tau_max, tau_min if L_gb improves
                    if best_overall_dist_data &gt; 1e-9 : # Avoid division by zero or very small values
                        self.tau_max_val = (1.0 / (self.evaporation_rate * best_overall_dist_data))
                        self.tau_min_val = self.tau_max_val * self.tau_min_factor_init # Use initial factor
                    else:
                        pass # Keep current tau values to avoid instability

            # Update pheromones (pass best_overall_sol_info for MMAS)
            self._update_pheromones(all_ant_solutions_current_iter,
                                    (best_overall_routes_data, best_overall_dist_data)
                                    if best_overall_dist_data != float(&#x27;inf&#x27;) else None)

            if (iteration + 1) % 10 == 0:
                 print(f&quot;Iteration {iteration+1}/{self.num_iterations}, Current best distance: {best_overall_dist_data:.2f}&quot;)

        if best_overall_routes_data and best_overall_dist_data != float(&#x27;inf&#x27;):
             return best_overall_routes_data, best_overall_dist_data

        return [], float(&#x27;inf&#x27;)</code></pre>
        `
    },
    {
        title: "Benchmark Datasets based on Dethloff-style VRPSPD instances",
        content: `
            <p><h2>Benchmark Datasets based on Dethloff-style VRPSPD instances</h2></p>
        `
    },
    {
        title: "Content",
        content: `
            <p>A "Dethloff-style VRPSPD instance" [13] is not merely a list of customers. It is a complete problem defined by the following factors:</p>
            
            <p><em> <strong>Base Customer Data:</strong></p>
            
            <p>  </em> <strong>Number of customers:</strong> Typically 50 customers (excluding the depot).</p>
            <p>  <em> <strong>Depot and Customer Coordinates:</strong> The (x, y) positions of the depot (usually fixed at the center, e.g., (50,50)) and of each customer.</p>
            <p>  </em> <strong>Delivery/Pickup Demand:</strong> The amount of goods each customer needs to have delivered and the amount they wish to have picked up.</p>
            <p>  <em> <strong>Geographical Distribution Scenarios:</strong> Dethloff defines two main scenarios:</p>
            <p>    </em> <strong>SCA (SCAttered):</strong> Customers are distributed randomly and relatively uniformly within a defined geographical area (e.g., a 100x100 square).</p>
            <p>    <em> <strong>CON (CONcentrated/Clustered):</strong> A portion of customers (e.g., 50%) is distributed according to the SCA pattern, while the remaining portion is concentrated (clustered) within a smaller region inside that area [13].</p>
            <p>  </em> <strong>Data Variants (Instance Index/Variant):</strong> For each scenario (SCA/CON) and each capacity configuration (see below), Dethloff typically generates multiple data variants (e.g., 10 variants, numbered from 0 to 9, such as SCA3-0, SCA3-1, ...). Each of these variants shares the same number of customers and geographical scenario, but the specific locations and/or demands [13, 28] of the customers differ as they are generated from different random seeds.</p>
            
            <p><em> <strong>Vehicle Operational Parameters:</strong></p>
            <p>  </em> <strong>Vehicle Capacity ($Q$ or $C$):</strong> This is a critical parameter. In Dethloff sets, capacity is not a fixed value for all instances. Instead, it is calculated based on the total delivery demand of all customers ($D_{total}$) and a coefficient $\\mu$ (mu). This coefficient $\\mu$ represents the hypothetical minimum number of vehicles required to serve all delivery demands. The formula is typically:</p>
            <p>  $$Q = \\lceil (\\sum_{j \\in \\text{Customers}, j \\neq \\text{depot}} D_j) / \\mu \\rceil$$</p>
            <p>  Dethloff commonly uses $\\mu = 3$ and $\\mu = 8$.</p>
            <p>    <em> $\\mu=3$: Assumes fewer vehicles, so each vehicle has a larger capacity.</p>
            <p>    </em> $\\mu=8$: Assumes more vehicles, so each vehicle has a smaller capacity.This creates problems with varying degrees of capacity constraints. A full instance is usually named in the format \`Scenario\` + \`mu\` + \`-\` + \`VariantIndex\` (e.g., \`CON3-0\`, \`SCA8-5\`).</p>
            <ul>
                <li><strong>Problem Objective:</strong> Minimize the total travel distance of all vehicles to serve all customers.</li>
            </ul>
        `
    },
    {
        title: "Implementation Code",
        content: `
            <pre style="background: #f5f5f5; padding: 1rem; border-radius: 4px; overflow-x: auto; font-size: 0.75rem;"><code class="language-python">import csv
import random
import math</code></pre>
        `
    },
    {
        title: "Creation and Preparation of Benchmark Datasets",
        content: `
            <p><h3>Creation and Preparation of Benchmark Datasets</h3></p>
            
            <p>This section explains the methodology and code used to generate customer datasets adhering to the Dethloff standard, which serve as inputs for testing and evaluating the \`AntColonyOptimizer\` algorithm.</p>
            
            <p>General Procedure:</p>
            <ol>
                <li><strong>Generate detailed customer data:</strong> Use the \`generate_deth_instance\` function to randomly generate information for each customer (coordinates, delivery/pickup demands) according to specific geographical scenarios.</li>
                <li><strong>Write data to CSV file:</strong> Use the \`write_deth_dataset\` function to invoke the above function and save the entire customer dataset (for scenarios such as SCA and CON) into a centralized CSV file.</li>
                <li><strong>Prepare specific problem instance (in subsequent cells):</strong> The CSV file created in step 2 contains "raw" data. To solve a specific problem instance (e.g., "DethCON with $\\mu=3$"), data from this CSV file is read and processed by the \`prepare_instance_data\` function. This function computes key instance parameters, such as the distance matrix and vehicle capacity (\`vehicle_capacity\`), based on the total delivery demand and a selected coefficient $\\mu$ (typically 3 or 8, following Dethloff).</li>
            </ol>
        `
    },
    {
        title: "Content",
        content: `
            <p><h4>1. Generating Customer Data with the \`generate_deth_instance\` Function</h4></p>
            
            <p>This function is responsible for generating data for a single test instance according to Dethloff's specifications.</p>
            
            <p><strong>Inputs:</strong></p>
            <p>  <em> \`instance_name\` (str): Identifier for the instance (e.g., "DethSCA", "DethCON").</p>
            <p>  </em> \`n_customers\` (int): Number of customers to generate (default is 50, excluding the depot).</p>
            <p>  <em> \`scenario\` (str): Scenario for the geographical distribution of customers. There are two options:</p>
            <p>    </em> \`"SCA"\` (SCAttered): Customer coordinates (x, y) are randomly generated and uniformly distributed within a square (e.g., from 0 to 100).</p>
            <p>    <em> \`"CON"\` (CONcentrated/Clustered): Half of the customers are generated according to the SCA scenario. The remaining half are generated concentrated within a smaller central region (e.g., from 100/3 to 200/3).</p>
            
            <p><strong>Operation:</strong></p>
            <p></em> <strong>Depot:</strong> Always generates a fixed depot at coordinates (50, 50) with \`customer_id = 0\` and zero delivery/pickup demand.</p>
            <p><em> <strong>Customers:</strong> Iterates from 1 to \`n_customers\` to generate information for each customer:</p>
            <p>  </em> <strong>Coordinates (x, y):</strong> Randomly generated based on the selected \`scenario\`. Results are rounded to 2 decimal places.</p>
            <p>  <em> <strong>Delivery Demand (\`delivery\`):</strong> Generates a random integer in the range [1, 100]. (Note: Some original Dethloff literature describes this range as [0, 100]. Using [1, 100] ensures that all customers have a positive delivery demand).</p>
            <p>  </em> <strong>Pickup Demand (\`pickup\`):</strong> Calculated based on delivery demand using the formula $P_j = \\text{int}((0.5 + r_j) \\cdot D_j)$, where $D_j$ is the delivery demand of customer $j$, and $r_j$ is a random float uniformly distributed in the interval [0, 1].</p>
            
            <p><strong>Output:</strong></p>
            <ul>
                <li>A list of dictionaries. Each dictionary contains information for a single node (depot or customer), including: \`instance\`, \`customer_id\`, \`x\`, \`y\`, \`delivery\`, \`pickup\`.</li>
            </ul>
        `
    },
    {
        title: "Implementation Code",
        content: `
            <pre style="background: #f5f5f5; padding: 1rem; border-radius: 4px; overflow-x: auto; font-size: 0.75rem;"><code class="language-python">def generate_deth_instance(instance_name, n_customers=50, scenario=&quot;SCA&quot;): # Keep n_customers=50 for Dethloff
    &quot;&quot;&quot;
    Generates data for a Dethloff-style instance (SCA or CON).
    instance_name: Instance name (e.g., &quot;DethSCA&quot;).
    n_customers: Number of customers (excluding depot).
    scenario: &quot;SCA&quot; (scattered) or &quot;CON&quot; (concentrated).
    Returns a list of dictionaries, where each dict represents a node (depot is customer_id 0).
    &quot;&quot;&quot;
    data = []
    # Add depot (customer_id 0)
    depot = {
        &quot;instance&quot;: instance_name, &quot;customer_id&quot;: 0, &quot;x&quot;: 50, &quot;y&quot;: 50, &quot;delivery&quot;: 0, &quot;pickup&quot;: 0
    }
    data.append(depot)

    for i in range(1, n_customers + 1):
        if scenario == &quot;SCA&quot;:
            x = random.uniform(0, 100)
            y = random.uniform(0, 100)
        elif scenario == &quot;CON&quot;:
            if i &lt;= n_customers / 2: # First half scattered
                x = random.uniform(0, 100)
                y = random.uniform(0, 100)
            else: # Second half concentrated
                x = random.uniform(100/3, 200/3)
                y = random.uniform(100/3, 200/3)
        else:
            raise ValueError(&quot;Invalid scenario. Choose &#x27;SCA&#x27; or &#x27;CON&#x27;.&quot;)

        # Delivery demand U[1,100] (integer)
        delivery = random.randint(1, 100) # Can change to randint(0,100) if zero demand is desired
        # Pickup demand P = (0.5 + r)*D, where r is U[0,1]
        r = random.random()
        pickup = int((0.5 + r) * delivery)

        customer = {
            &quot;instance&quot;: instance_name, &quot;customer_id&quot;: i, &quot;x&quot;: round(x, 2), &quot;y&quot;: round(y, 2),
            &quot;delivery&quot;: delivery, &quot;pickup&quot;: pickup
        }
        data.append(customer)

    return data</code></pre>
        `
    },
    {
        title: "Content",
        content: `
            <p><h4>2. Writing Data to CSV with the \`write_deth_dataset\` function</h4></p>
            
            <p>This function automates the creation and storage of data for Dethloff's two main scenarios: SCA and CON.</p>
            
            <p><strong>Inputs:</strong></p>
            
            <p><em> \`filename\` (str): The name of the CSV file to be created for data storage (default: "dethloff_benchmark.csv").</p>
            
            <p></em> \`n_customers\` (int): The number of customers for each scenario (default: 50).</p>
            
            <p><strong>Operation:</strong></p>
            
            <ol>
                <li>Calls the generate_deth_instance function twice:</li>
            </ol>
            
            <p>    <em> One time with \`scenario="SCA"\` to generate data for the "DethSCA" instance.</p>
            
            <p>    </em> One time with \`scenario="CON"\` to generate data for the "DethCON" instance.</p>
            
            <ol>
                <li>Combines the data from both instances.</li>
            </ol>
            
            <ol>
                <li>Writes the entire dataset to the specified CSV file. The CSV file will contain the columns: \`instance\`, \`customer_id\`, \`x\`, \`y\`, \`delivery\`, \`pickup\`.</li>
            </ol>
            
            <p><strong>Result:</strong> A CSV file is generated containing customer data for both scenarios, ready to be utilized by the \`prepare_instance_data\` function in subsequent steps.</p>
        `
    },
    {
        title: "Implementation Code",
        content: `
            <pre style="background: #f5f5f5; padding: 1rem; border-radius: 4px; overflow-x: auto; font-size: 0.75rem;"><code class="language-python">def write_deth_dataset(filename=&quot;dethloff_benchmark.csv&quot;, n_customers=50):
    &quot;&quot;&quot;
    Generates benchmark data for both &quot;DethSCA&quot; and &quot;DethCON&quot; (1 instance of each)
    and writes to a CSV file.
    &quot;&quot;&quot;
    data_sca = generate_deth_instance(&quot;DethSCA&quot;, n_customers, &quot;SCA&quot;)
    data_con = generate_deth_instance(&quot;DethCON&quot;, n_customers, &quot;CON&quot;)

    all_data = data_sca + data_con # Combine data

    fieldnames = [&quot;instance&quot;, &quot;customer_id&quot;, &quot;x&quot;, &quot;y&quot;, &quot;delivery&quot;, &quot;pickup&quot;]
    with open(filename, &quot;w&quot;, newline=&quot;&quot;) as csvfile:
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        writer.writeheader()
        for row in all_data:
            writer.writerow(row)

    print(f&quot;Dataset written to file &#x27;{filename}&#x27; with:&quot;)
    print(f&quot;  - {len(data_sca)} rows for DethSCA (including depot)&quot;)
    print(f&quot;  - {len(data_con)} rows for DethCON (including depot)&quot;)</code></pre>
        `
    },
    {
        title: "Content",
        content: `
            <p><h4>3. Preparing Specific Problem Instances for ACO using the \`prepare_instance_data\` Function</h4></p>
            
            
            <p>The \`prepare_instance_data\` function serves as a bridge between raw customer data and a specific VRPSPD problem instance, structuring it in a format that the ACO algorithm can interpret and solve.</p>
            
            <p><strong>Inputs:</strong></p>
            <p><em> \`instance_data\` (list of dicts): A list of dictionaries, where each dictionary describes a customer (or the depot) with fields such as \`customer_id\`, \`x\`, \`y\`, \`delivery\`, and \`pickup\`. This data is typically extracted from a subset of the CSV file (e.g., all rows where \`instance == "DethCON"\`).</p>
            <p></em> \`mu_factor\` (int): The coefficient $\\mu$ (e.g., 3 or 8). This parameter determines the calculation of the vehicle's capacity.</p>
            
            <p><strong>Internal Processing Steps:</strong></p>
            <ol>
                <li><strong>Data Ordering and Extraction:</strong></li>
            </ol>
            <p>  <em> First, the function sorts \`instance_data\` by \`customer_id\` to ensure consistency and the correct order of nodes (the depot is ID 0, followed by the customers).</p>
            <p>  </em> It then iterates through the sorted list to extract the following separately:</p>
            <p>    <em> \`coordinates\`: A list of \`(x, y)\` tuples.</p>
            <p>    </em> \`demand_delivery\`: A list of delivery demand values.</p>
            <p>    <em> \`demand_pickup\`: A list of pickup demand values.The order of elements in these three lists corresponds to one another and aligns with the \`customer_id\`.</p>
            <ol>
                <li><strong>Distance Matrix Calculation:</strong></li>
            </ol>
            <p>  </em> Based on the \`coordinates\` list, the function generates a \`distance_matrix\`.</p>
            <p>  <em> The element \`distance_matrix[i][j]\` stores the Euclidean distance between node $i$ (with coordinates \`coordinates[i]\`) and node $j$ (with coordinates \`coordinates[j]\`).</p>
            <p>  </em> The Euclidean distance formula between two points $(x_1, y_1)$ and $(x_2, y_2)$ is: $\\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$.</p>
            <ol>
                <li><strong>Vehicle Capacity Calculation:</strong></li>
            </ol>
            <p>  <em> This step is specific to the generation of Dethloff-style instances.</p>
            <p>  </em> The function calculates the total delivery demand of all customers (excluding the depot, as the depot has no delivery demand): $\\sum_{s \\in \\text{Customers}, s \\neq \\text{depot}} D_s$.</p>
            <p>  <em> It then applies the formula using the \`mu_factor\`: \`vehicle_capacity = math.ceil(total_delivery_demand_for_capacity_calc / mu_factor)\`</p>
            <p>  </em> This resulting \`vehicle_capacity\` serves as a constraint for the vehicles within the ACO algorithm.</p>
            
            <p><strong>Function Output:</strong></p>
            <p>  <em> A tuple consisting of 5 components: \`(coordinates, demand_delivery, demand_pickup, distance_matrix, vehicle_capacity)\`.</p>
            <p>  </em> This dataset is now "prepared" and contains all the necessary information to initialize and execute the \`AntColonyOptimizer\` algorithm for a specific problem instance.</p>
        `
    },
    {
        title: "Implementation Code",
        content: `
            <pre style="background: #f5f5f5; padding: 1rem; border-radius: 4px; overflow-x: auto; font-size: 0.75rem;"><code class="language-python">def prepare_instance_data(instance_data, mu_factor):
    &quot;&quot;&quot;Computes the distance_matrix and vehicle_capacity from instance data.&quot;&quot;&quot;
    coordinates = []
    demand_delivery = []
    demand_pickup = []

    # Re-sort by customer_id to ensure correct ordering
    instance_data.sort(key=lambda r: int(r[&#x27;customer_id&#x27;]))

    for row in instance_data:
        coordinates.append((float(row[&#x27;x&#x27;]), float(row[&#x27;y&#x27;])))
        demand_delivery.append(int(row[&#x27;delivery&#x27;]))
        demand_pickup.append(int(row[&#x27;pickup&#x27;]))

    n_nodes = len(coordinates)
    distance_matrix = np.zeros((n_nodes, n_nodes))
    for i in range(n_nodes):
        for j in range(n_nodes):
            if i != j:
                dist = math.sqrt((coordinates[i][0] - coordinates[j][0])**2 +
                                 (coordinates[i][1] - coordinates[j][1])**2)
                distance_matrix[i][j] = dist

    # Calculate vehicle_capacity according to Dethloff
    # Exclude depot (index 0) when calculating total demand_delivery
    total_delivery_demand_for_capacity_calc = sum(d for i, d in enumerate(demand_delivery) if i != 0)

    if mu_factor == 0: # Avoid division by zero if mu factor is missing
        vehicle_capacity = sum(d for d in demand_delivery if d &gt; 0) * 1.5 # A large default value
    else:
        vehicle_capacity = math.ceil(total_delivery_demand_for_capacity_calc / mu_factor)
        if vehicle_capacity == 0 : vehicle_capacity = 100 # Prevent capacity = 0

    return coordinates, demand_delivery, demand_pickup, distance_matrix, int(vehicle_capacity)</code></pre>
        `
    },
    {
        title: "Main Function to Generate Dataset",
        content: `
            <p><h3>Main Function to Generate Dataset</h3></p>
            
            <p>This code cell serves as the main execution point to invoke the \`write_deth_dataset\` function and generate the dethloff_benchmark.csv file.</p>
            
            <p><em> \`random.seed(42)\` <strong>(Or absent):</strong></p>
            
            <p>  </em> If the line \`random.seed(some_number)\` is used (e.g., \`random.seed(42)\`), the generated dataset will be identical every time this cell is run. This is useful for debugging and consistent result comparison on the same dataset (reproducibility).</p>
            
            <p>  <em> If the line is <strong>deleted or disabled (commented out)</strong>, a <strong>new and different</strong> dataset will be generated each run, as the \`random\` module will use a random seed (typically based on system time). This is useful for testing the algorithm's robustness across various datasets.</p>
            
            <p></em> \`write_deth_dataset("dethloff_benchmark.csv", n_customers=50)\`:</p>
            
            <ul>
                <li>Calls the function explained above to create the CSV file with 50 customers for each of the SCA and CON scenarios.</li>
            </ul>
            
            <p><strong>Note:</strong> As mentioned, the CSV file created here (\`dethloff_benchmark.csv\`) is the raw data source. For the ACO algorithm to process a specific "problem instance" adhering to the Dethloff standard, the \`prepare_instance_data\` function must be used to create the problem instance for the ACO.</p>
        `
    },
    {
        title: "Implementation Code",
        content: `
            <pre style="background: #f5f5f5; padding: 1rem; border-radius: 4px; overflow-x: auto; font-size: 0.75rem;"><code class="language-python"># Set random seed to ensure dataset reproducibility; uncomment the line below if needed, otherwise comment it out
random.seed(42)

# Generate and write Dethloff-style benchmark dataset
write_deth_dataset(&quot;dethloff_benchmark.csv&quot;, n_customers=50)</code></pre>
        `
    },
    {
        title: "SECTION 4: BENCHMARK TESTING",
        content: `
            <p><h1>SECTION 4: BENCHMARK TESTING</h1></p>
        `
    },
    {
        title: "Defining Helper Functions for Exporting Test Results and Visualization",
        content: `
            <p><h2>Defining Helper Functions for Exporting Test Results and Visualization</h2></p>
        `
    },
    {
        title: "Implementation Code",
        content: `
            <pre style="background: #f5f5f5; padding: 1rem; border-radius: 4px; overflow-x: auto; font-size: 0.75rem;"><code class="language-python">def load_data_from_csv(file_path, instance_name):
    &quot;&quot;&quot;
    Load data from CSV file for a specific instance

    Args:
        file_path: Path to the CSV file
        instance_name: Name of the instance to load (e.g., &quot;DethSCA&quot;)

    Returns:
        coordinates: List of (x, y) coordinates for each node
        demand_delivery: List of delivery demands
        demand_pickup: List of pickup demands
    &quot;&quot;&quot;
    coordinates = []
    demand_delivery = []
    demand_pickup = []

    with open(file_path, &#x27;r&#x27;) as file:
        reader = csv.DictReader(file)
        for row in reader:
            if row[&#x27;instance&#x27;] == instance_name:
                customer_id = int(row[&#x27;customer_id&#x27;])
                x = float(row[&#x27;x&#x27;])
                y = float(row[&#x27;y&#x27;])
                delivery = int(row[&#x27;delivery&#x27;])
                pickup = int(row[&#x27;pickup&#x27;])

                # Ensure we have enough space in our lists
                while len(coordinates) &lt;= customer_id:
                    coordinates.append((0, 0))
                    demand_delivery.append(0)
                    demand_pickup.append(0)

                coordinates[customer_id] = (x, y)
                demand_delivery[customer_id] = delivery
                demand_pickup[customer_id] = pickup

    return coordinates, demand_delivery, demand_pickup

def calculate_distance_matrix(coordinates):
    &quot;&quot;&quot;
    Calculate Euclidean distance matrix from coordinates
    &quot;&quot;&quot;
    n = len(coordinates)
    distance_matrix = np.zeros((n, n))

    for i in range(n):
        for j in range(n):
            if i != j:
                x1, y1 = coordinates[i]
                x2, y2 = coordinates[j]
                distance_matrix[i][j] = np.sqrt((x1 - x2)**2 + (y1 - y2)**2)

    return distance_matrix

def plot_solution(coordinates, routes, instance_name):
    &quot;&quot;&quot;
    Enhanced visualization of the solution with multiple routes
    &quot;&quot;&quot;
    plt.figure(figsize=(12, 10))

    # Plot all nodes
    x_coords = [coord[0] for coord in coordinates]
    y_coords = [coord[1] for coord in coordinates]
    plt.scatter(x_coords, y_coords, c=&#x27;b&#x27;, s=50)

    # Mark depot
    plt.scatter(coordinates[0][0], coordinates[0][1], c=&#x27;r&#x27;, s=150, marker=&#x27;s&#x27;, label=&quot;Depot&quot;)

    # Plot each route with a different color
    colors = [&#x27;g&#x27;, &#x27;purple&#x27;, &#x27;orange&#x27;, &#x27;brown&#x27;, &#x27;pink&#x27;, &#x27;gray&#x27;, &#x27;olive&#x27;, &#x27;cyan&#x27;, &#x27;magenta&#x27;, &#x27;lime&#x27;]

    # Calculate total information for legend
    total_distance = 0
    total_customers = 0

    for route_idx, route in enumerate(routes):
        color = colors[route_idx % len(colors)]

        # Calculate route metrics
        route_distance = sum(np.sqrt((coordinates[route[i]][0] - coordinates[route[i+1]][0])**2 +
                                     (coordinates[route[i]][1] - coordinates[route[i+1]][1])**2)
                             for i in range(len(route)-1))
        customers = len(route) - 2  # Exclude depot at start/end
        total_distance += route_distance
        total_customers += customers

        # Plot route with label
        label = f&quot;Route {route_idx+1} ({customers} customers, {route_distance:.1f} dist)&quot;

        # Plot route
        for i in range(len(route)-1):
            start = route[i]
            end = route[i+1]
            plt.plot([coordinates[start][0], coordinates[end][0]],
                     [coordinates[start][1], coordinates[end][1]],
                     color=color, linestyle=&#x27;-&#x27;, linewidth=2)

            # Add arrow to show direction
            mid_x = (coordinates[start][0] + coordinates[end][0]) / 2
            mid_y = (coordinates[start][1] + coordinates[end][1]) / 2
            plt.annotate(&quot;&quot;, xy=(coordinates[end][0], coordinates[end][1]),
                         xytext=(mid_x, mid_y),
                         arrowprops=dict(arrowstyle=&quot;-&gt;&quot;, lw=1.5, color=color))

        # Add a dummy plot for legend
        plt.plot([], [], color=color, linestyle=&#x27;-&#x27;, linewidth=2, label=label)

    # Add node labels
    for i, coord in enumerate(coordinates):
        if i == 0:
            plt.annotate(&quot;Depot&quot;, (coord[0]+1, coord[1]+1), fontsize=10, color=&#x27;red&#x27;, weight=&#x27;bold&#x27;)
        else:
            plt.annotate(f&quot;{i}&quot;, (coord[0]+0.5, coord[1]+0.5), fontsize=9,
                         ha=&#x27;center&#x27;, va=&#x27;center&#x27;,
                         bbox=dict(boxstyle=&quot;circle&quot;, fc=&quot;white&quot;, ec=&quot;black&quot;, alpha=0.7))

    # Add solution summary
    plt.figtext(0.02, 0.02,
                f&quot;Total distance: {total_distance:.2f}\\n&quot;
                f&quot;Total customers: {total_customers}\\n&quot;
                f&quot;Vehicles: {len(routes)}&quot;,
                bbox=dict(facecolor=&#x27;white&#x27;, alpha=0.8), fontsize=10)

    plt.title(f&quot;ACO Solution for {instance_name} - {len(routes)} Routes&quot;, fontsize=14)
    plt.xlabel(&quot;X Coordinate&quot;)
    plt.ylabel(&quot;Y Coordinate&quot;)
    plt.grid(True, alpha=0.3)
    plt.legend(loc=&#x27;upper center&#x27;, bbox_to_anchor=(0.5, -0.05), ncol=3)
    plt.tight_layout()
    plt.savefig(f&quot;{instance_name}_solution.png&quot;, dpi=300)
    plt.show()

def save_results_to_excel(filename, instance_name, best_route, best_distance, total_delivery, total_pickup, customers_visited, num_vehicles):
    &quot;&quot;&quot;
    Save ACO results and statistics to an Excel file.
    &quot;&quot;&quot;
    if os.path.exists(filename):
        wb = openpyxl.load_workbook(filename)
        ws = wb.active
    else:
        wb = Workbook()
        ws = wb.active
        ws.append([
            &quot;Instance&quot;, &quot;Best Distance&quot;, &quot;Num Vehicles&quot;, &quot;Customers Visited&quot;,
            &quot;Total Delivery&quot;, &quot;Total Pickup&quot;, &quot;Routes&quot;
        ])
    # Prepare route string for Excel
    route_str = &quot;; &quot;.join([str(route) for route in best_route])
    ws.append([
        instance_name, best_distance, num_vehicles, customers_visited,
        total_delivery, total_pickup, route_str
    ])
    wb.save(filename)

def save_summary_table_to_excel(summary_data_list, filename=&quot;Default_Summary.xlsx&quot;, sheet_name=&quot;Summary&quot;):
    &quot;&quot;&quot;
    Saves a list of dictionaries (each dict is a row) to an Excel file.
    Creates a new sheet if the sheet name does not exist, or appends an index to the sheet name if it already exists.
    &quot;&quot;&quot;
    if not summary_data_list:
        print(&quot;No data to save to Excel.&quot;)
        return

    file_exists = os.path.isfile(filename)

    if file_exists:
        try:
            wb = openpyxl.load_workbook(filename)
        except Exception as e:
            print(f&quot;Error opening Excel file &#x27;{filename}&#x27;: {e}. Creating a new file.&quot;)
            wb = Workbook() # Create new workbook if old one cannot be opened
    else:
        wb = Workbook()

    # Handle sheet name to avoid duplicates
    original_sheet_name = sheet_name
    sheet_idx = 1
    while sheet_name in wb.sheetnames:
        sheet_name = f&quot;{original_sheet_name}_{sheet_idx}&quot;
        sheet_idx += 1

    if original_sheet_name != sheet_name : # If sheet name was changed
         if original_sheet_name in wb.sheetnames and wb[original_sheet_name].max_row == 1 and wb[original_sheet_name].max_column == 1 : # If old sheet is empty
            del wb[original_sheet_name] # Delete old empty sheet if original name existed and was empty

    ws = wb.create_sheet(title=sheet_name)

    # Write headers from keys of the first dict
    headers = list(summary_data_list[0].keys())
    ws.append(headers)

    # Write data
    for data_dict in summary_data_list:
        row_values = [data_dict.get(header, &quot;&quot;) for header in headers]
        ws.append(row_values)

    # Delete default sheet &quot;Sheet&quot; if it is empty and workbook has more than 1 sheet
    if &quot;Sheet&quot; in wb.sheetnames and len(wb.sheetnames) &gt; 1:
        default_ws = wb[&quot;Sheet&quot;]
        if default_ws.max_row == 1 and default_ws.max_column == 1: # Check if sheet is empty
            # Check if cell A1 is None, some openpyxl versions create A1=None
            if default_ws[&#x27;A1&#x27;].value is None:
                 del wb[&quot;Sheet&quot;]
            elif not default_ws[&#x27;A1&#x27;].value : # If cell A1 has value but is empty string
                 del wb[&quot;Sheet&quot;]


    try:
        wb.save(filename)
        print(f&quot;Summary results table saved to &#x27;{filename}&#x27;, sheet &#x27;{ws.title}&#x27;.&quot;)
    except Exception as e:
        print(f&quot;Error saving Excel file: {e}&quot;)</code></pre>
        `
    },
    {
        title: "Main Function",
        content: `
            <p><h2>Main Function</h2></p>
        `
    },
    {
        title: "DethCON Instance Single Test",
        content: `
            <p><h3>DethCON Instance Single Test</h3></p>
        `
    },
    {
        title: "Implementation Code",
        content: `
            <pre style="background: #f5f5f5; padding: 1rem; border-radius: 4px; overflow-x: auto; font-size: 0.75rem;"><code class="language-python">csv_file_path = &quot;dethloff_benchmark.csv&quot;
# Select instance and mu factor (e.g., for Dethloff)
instance_name_to_run = &quot;DethCON&quot;
mu_factor_for_instance = 3 # Or 8

# Load all data from CSV first
all_instance_rows = {}
with open(csv_file_path, &#x27;r&#x27;) as file:
    reader = csv.DictReader(file)
    for row in reader:
        instance_label = row[&#x27;instance&#x27;]
        if instance_label not in all_instance_rows:
            all_instance_rows[instance_label] = []
        all_instance_rows[instance_label].append(row)

if instance_name_to_run not in all_instance_rows:
    print(f&quot;Instance {instance_name_to_run} not found in CSV file.&quot;)
else:
    specific_instance_data = all_instance_rows[instance_name_to_run]

    coordinates, demand_delivery, demand_pickup, distance_matrix, vehicle_capacity = \\
        prepare_instance_data(specific_instance_data, mu_factor_for_instance)

    n_customers = len(coordinates)

    print(f&quot;Loaded instance {instance_name_to_run} with {n_customers} nodes (including depot)&quot;)
    print(f&quot;Calculated vehicle capacity: {vehicle_capacity} (with mu_factor={mu_factor_for_instance})&quot;)
    # print(&quot;Coordinates:&quot;, coordinates)
    # print(&quot;Delivery Demand:&quot;, demand_delivery)
    # print(&quot;Pickup Demand:&quot;, demand_pickup)

    # ACO parameters (may need further tuning)
    num_ants = 20
    num_iterations = 100
    alpha = 1.0
    beta = 2.0 # Reduce beta if visibility is too dominant compared to pheromone
    evaporation_rate = 0.1
    pheromone_deposit_weight = 1.0 # Or Q_const in AS
    q0_acs = 0.9 # Parameter for ACS rule (if used)

    # Estimate L0 from Nearest Neighbor heuristic
    temp_optimizer_for_nn = AntColonyOptimizer(1, 1, 1, 1, 0.1, 1, # dummy params
                                                n_customers, coordinates, distance_matrix,
                                                demand_delivery, demand_pickup, vehicle_capacity)
    _, nn_l0_val = temp_optimizer_for_nn._robust_nn_heuristic() # Call new NN function

    # Print nn_l0_val for verification
    print(f&quot;L0 value from Nearest Neighbor Heuristic (robust): {nn_l0_val}&quot;)


    aco = AntColonyOptimizer(
        num_ants=num_ants,
        num_iterations=num_iterations,
        alpha=alpha,
        # beta=beta, # Currently using beta=2.0, Çatay paper uses 4.0. Testing with beta = 4.0
        beta=4.0,
        evaporation_rate=evaporation_rate,
        pheromone_deposit_weight=pheromone_deposit_weight, # Not currently used directly in this MMAS implementation
        n_customers=n_customers,
        coordinates=coordinates,
        distance_matrix=distance_matrix,
        demand_delivery=demand_delivery,
        demand_pickup=demand_pickup,
        vehicle_capacity=vehicle_capacity,
        nn_l0=nn_l0_val, # Pass calculated L0
        # q0=q0_acs # Currently using q0=0.9. Testing with q0 = 0.7 (as in Çatay paper)
        q0=0.7
    )

    print(f&quot;Starting ACO optimization for {instance_name_to_run}...&quot;)
    best_overall_routes, best_overall_distance = aco.optimize()

    print(&quot;\\nResults:&quot;)
    if best_overall_routes:
        print(f&quot;Best solution: {len(best_overall_routes)} routes&quot;)
        for i, r in enumerate(best_overall_routes):
            print(f&quot;  Route {i+1}: {r}&quot;)
        print(f&quot;Best total distance: {best_overall_distance:.2f}&quot;)
        plot_solution(coordinates, best_overall_routes, instance_name_to_run)

        # Calculate statistical metrics
        total_delivery_val = sum(sum(demand_delivery[node_idx] for node_idx in route[1:-1]) for route in best_overall_routes)
        total_pickup_val = sum(sum(demand_pickup[node_idx] for node_idx in route[1:-1]) for route in best_overall_routes)
        customers_visited_val = sum(len(route) - 2 for route in best_overall_routes)

        print(&quot;\\nSolution Statistics:&quot;)
        print(f&quot;Total customers visited: {customers_visited_val}&quot;)
        print(f&quot;Total delivery volume: {total_delivery_val}&quot;)
        print(f&quot;Total pickup volume: {total_pickup_val}&quot;)
        print(f&quot;Number of vehicles used: {len(best_overall_routes)}&quot;)

        excel_filename = f&quot;{instance_name_to_run}_aco_vrppd_results_improved.xlsx&quot;
        save_results_to_excel(
            excel_filename, instance_name_to_run, best_overall_routes, best_overall_distance,
            total_delivery_val, total_pickup_val, customers_visited_val, len(best_overall_routes)
        )
        print(f&quot;\\nResults saved to {excel_filename}&quot;)

    else:
        print(&quot;No feasible solution found.&quot;)</code></pre>
        `
    },
    {
        title: "DethSCA Instance Single Test",
        content: `
            <p><h3>DethSCA Instance Single Test</h3></p>
        `
    },
    {
        title: "Implementation Code",
        content: `
            <pre style="background: #f5f5f5; padding: 1rem; border-radius: 4px; overflow-x: auto; font-size: 0.75rem;"><code class="language-python">csv_file_path = &quot;dethloff_benchmark.csv&quot;
# Select instance and mu factor (e.g., for Dethloff)
instance_name_to_run = &quot;DethSCA&quot;
mu_factor_for_instance = 3 # Or 8

# Load all data from CSV first
all_instance_rows = {}
with open(csv_file_path, &#x27;r&#x27;) as file:
    reader = csv.DictReader(file)
    for row in reader:
        instance_label = row[&#x27;instance&#x27;]
        if instance_label not in all_instance_rows:
            all_instance_rows[instance_label] = []
        all_instance_rows[instance_label].append(row)

if instance_name_to_run not in all_instance_rows:
    print(f&quot;Instance {instance_name_to_run} not found in CSV file.&quot;)
else:
    specific_instance_data = all_instance_rows[instance_name_to_run]

    coordinates, demand_delivery, demand_pickup, distance_matrix, vehicle_capacity = \\
        prepare_instance_data(specific_instance_data, mu_factor_for_instance)

    n_customers = len(coordinates)

    print(f&quot;Loaded instance {instance_name_to_run} with {n_customers} nodes (including depot)&quot;)
    print(f&quot;Calculated vehicle capacity: {vehicle_capacity} (with mu_factor={mu_factor_for_instance})&quot;)
    # print(&quot;Coordinates:&quot;, coordinates)
    # print(&quot;Delivery Demand:&quot;, demand_delivery)
    # print(&quot;Pickup Demand:&quot;, demand_pickup)

    # ACO parameters (may need further tuning)
    num_ants = 20
    num_iterations = 100
    alpha = 1.0
    beta = 2.0
    evaporation_rate = 0.1
    pheromone_deposit_weight = 1.0 # Or Q_const in AS
    q0_acs = 0.9 # Parameter for ACS rule (if used)

    # Estimate L0 from Nearest Neighbor heuristic
    temp_optimizer_for_nn = AntColonyOptimizer(1, 1, 1, 1, 0.1, 1, # dummy params
                                                n_customers, coordinates, distance_matrix,
                                                demand_delivery, demand_pickup, vehicle_capacity)
    _, nn_l0_val = temp_optimizer_for_nn._robust_nn_heuristic() # Call new NN function

    # Print nn_l0_val for verification
    print(f&quot;L0 value from Nearest Neighbor Heuristic (robust): {nn_l0_val}&quot;)


    aco = AntColonyOptimizer(
        num_ants=num_ants,
        num_iterations=num_iterations,
        alpha=alpha,
        # beta=beta, # Currently using beta=2.0, Çatay paper uses 4.0. Testing with beta = 4.0
        beta=4.0,
        evaporation_rate=evaporation_rate,
        pheromone_deposit_weight=pheromone_deposit_weight,
        n_customers=n_customers,
        coordinates=coordinates,
        distance_matrix=distance_matrix,
        demand_delivery=demand_delivery,
        demand_pickup=demand_pickup,
        vehicle_capacity=vehicle_capacity,
        nn_l0=nn_l0_val, # Pass calculated L0
        # q0=q0_acs # Currently using q0=0.9. Testing with q0 = 0.7 (as in Çatay paper)
        q0=0.7
    )

    print(f&quot;Starting ACO optimization for {instance_name_to_run}...&quot;)
    best_overall_routes, best_overall_distance = aco.optimize()

    print(&quot;\\nResults:&quot;)
    if best_overall_routes:
        print(f&quot;Best solution: {len(best_overall_routes)} routes&quot;)
        for i, r in enumerate(best_overall_routes):
            print(f&quot;  Route {i+1}: {r}&quot;)
        print(f&quot;Best total distance: {best_overall_distance:.2f}&quot;)
        plot_solution(coordinates, best_overall_routes, instance_name_to_run)

        # Calculate statistical metrics
        total_delivery_val = sum(sum(demand_delivery[node_idx] for node_idx in route[1:-1]) for route in best_overall_routes)
        total_pickup_val = sum(sum(demand_pickup[node_idx] for node_idx in route[1:-1]) for route in best_overall_routes)
        customers_visited_val = sum(len(route) - 2 for route in best_overall_routes)

        print(&quot;\\nSolution Statistics:&quot;)
        print(f&quot;Total customers visited: {customers_visited_val}&quot;)
        print(f&quot;Total delivery volume: {total_delivery_val}&quot;)
        print(f&quot;Total pickup volume: {total_pickup_val}&quot;)
        print(f&quot;Number of vehicles used: {len(best_overall_routes)}&quot;)

        excel_filename = f&quot;{instance_name_to_run}_aco_vrppd_results_improved.xlsx&quot;
        save_results_to_excel(
            excel_filename, instance_name_to_run, best_overall_routes, best_overall_distance,
            total_delivery_val, total_pickup_val, customers_visited_val, len(best_overall_routes)
        )
        print(f&quot;\\nResults saved to {excel_filename}&quot;)

    else:
        print(&quot;No feasible solution found.&quot;)</code></pre>
        `
    },
    {
        title: "Benchmark Testing",
        content: `
            <p><h3>Benchmark Testing</h3></p>
        `
    },
    {
        title: "Content",
        content: `
            <p>Run the ACO algorithm 10 times, calculate the average and best distances across the runs, and export the results to an Excel file.</p>
        `
    },
    {
        title: "Implementation Code",
        content: `
            <pre style="background: #f5f5f5; padding: 1rem; border-radius: 4px; overflow-x: auto; font-size: 0.75rem;"><code class="language-python"># --- CONFIGURE PROBLEM INSTANCES FOR BENCHMARKING ---
problem_configurations = [
    {&#x27;base_name&#x27;: &quot;DethSCA&quot;, &#x27;mu&#x27;: 3, &#x27;display_name&#x27;: &quot;SCA_mu3&quot;},
    {&#x27;base_name&#x27;: &quot;DethSCA&quot;, &#x27;mu&#x27;: 8, &#x27;display_name&#x27;: &quot;SCA_mu8&quot;},
    {&#x27;base_name&#x27;: &quot;DethCON&quot;, &#x27;mu&#x27;: 3, &#x27;display_name&#x27;: &quot;CON_mu3&quot;},
    {&#x27;base_name&#x27;: &quot;DethCON&quot;, &#x27;mu&#x27;: 8, &#x27;display_name&#x27;: &quot;CON_mu8&quot;},
    # Add other configurations if desired, e.g., with different data files
    # or customer data variations if you generate them.
    # Currently, we use the same file dethloff_benchmark.csv for DethSCA and DethCON.
]

N_ACO_RUNS = 10  # Number of ACO runs for each problem instance (papers usually use 10)
                  # Reduce to 2-3 for faster execution during code testing

# --- CONFIGURE ACO PARAMETERS (can be adjusted per problem config if desired) ---
num_ants_config = 20
num_iterations_config = 100
alpha_config = 1.0
beta_config = 4.0
evaporation_rate_config = 0.1
q0_config = 0.7

# List to store aggregated results from all problem instances
all_benchmarks_results = []

# 1. Load all customer data from CSV once
all_csv_data_rows = {}
try:
    with open(csv_file_path, &#x27;r&#x27;, encoding=&#x27;utf-8&#x27;) as file:
        reader = csv.DictReader(file)
        for row in reader:
            instance_label = row[&#x27;instance&#x27;]
            if instance_label not in all_csv_data_rows:
                all_csv_data_rows[instance_label] = []
            all_csv_data_rows[instance_label].append(row)
except FileNotFoundError:
    print(f&quot;ERROR: File {csv_file_path} not found. Please run the dataset creation cell first.&quot;)
    # exit() or raise error depending on how you want to handle it

# --- START BENCHMARKING FOR EACH PROBLEM INSTANCE ---
for config in problem_configurations:
    instance_base_name = config[&#x27;base_name&#x27;]
    mu_factor = config[&#x27;mu&#x27;]
    problem_display_name = config[&#x27;display_name&#x27;] # E.g., &quot;SCA_mu3&quot;

    print(f&quot;\\n\\n--- Starting Benchmark for Problem: {problem_display_name} ---&quot;)
    print(f&quot;Base data: {instance_base_name}, mu_factor: {mu_factor}, Number of ACO runs: {N_ACO_RUNS}&quot;)

    if instance_base_name not in all_csv_data_rows:
        print(f&quot;ERROR: Data for &#x27;{instance_base_name}&#x27; not found in CSV file. Skipping this instance.&quot;)
        all_benchmarks_results.append({
            &quot;Problem&quot;: problem_display_name,
            &quot;ACO Avg&quot;: &quot;Error: Base data not found&quot;,
            &quot;ACO Best&quot;: &quot;Error: Base data not found&quot;,
            &quot;Num Vehicles (Best Run)&quot;: &quot;N/A&quot;,
            &quot;Raw ACO Best&quot;: float(&#x27;inf&#x27;)
        })
        continue

    specific_instance_customer_data = all_csv_data_rows[instance_base_name]

    # 2. Prepare data for the current instance (calculate distance matrix, vehicle capacity)
    # (The function prepare_instance_data and class AntColonyOptimizer must be defined in previous cells)
    coordinates, demand_delivery, demand_pickup, distance_matrix, vehicle_capacity = \\
        prepare_instance_data(specific_instance_customer_data, mu_factor)

    n_customers = len(coordinates)
    print(f&quot;Instance &#x27;{problem_display_name}&#x27;: {n_customers} nodes, Vehicle Capacity: {vehicle_capacity}&quot;)

    # 3. Estimate L0 once for this problem instance
    # Create a temporary ACO instance just to call the NN function
    temp_optimizer_for_nn = AntColonyOptimizer(1,1,1,1,0.1,1, # dummy params
                                    n_customers, coordinates, distance_matrix,
                                    demand_delivery, demand_pickup, vehicle_capacity)
    _, nn_l0_val = temp_optimizer_for_nn._robust_nn_heuristic() # Use the improved NN function
    print(f&quot;Estimated L0 for &#x27;{problem_display_name}&#x27;: {nn_l0_val}&quot;)

    # 4. Run ACO N_ACO_RUNS times for this problem instance
    current_problem_run_distances = []
    best_routes_for_this_problem = None
    best_distance_for_this_problem_overall = float(&#x27;inf&#x27;)

    for i_run in range(N_ACO_RUNS):
        print(f&quot;  Running ACO {i_run + 1}/{N_ACO_RUNS} for {problem_display_name}...&quot;)
        # Create a new ACO instance for each run
        aco_runner = AntColonyOptimizer(
            num_ants=num_ants_config,
            num_iterations=num_iterations_config,
            alpha=alpha_config,
            beta=beta_config,
            evaporation_rate=evaporation_rate_config,
            pheromone_deposit_weight=1.0,
            n_customers=n_customers,
            coordinates=coordinates,
            distance_matrix=distance_matrix,
            demand_delivery=demand_delivery,
            demand_pickup=demand_pickup,
            vehicle_capacity=vehicle_capacity,
            nn_l0=nn_l0_val,
            q0=q0_config
        )

        # Run optimization (optimize function already prints progress every 10 iterations)
        routes_this_run, distance_this_run = aco_runner.optimize()

        if distance_this_run != float(&#x27;inf&#x27;):
            print(f&quot;    Run {i_run + 1} OK. Distance: {distance_this_run:.2f}&quot;)
            current_problem_run_distances.append(distance_this_run)
            if distance_this_run &lt; best_distance_for_this_problem_overall:
                best_distance_for_this_problem_overall = distance_this_run
                best_routes_for_this_problem = routes_this_run
        else:
            print(f&quot;    Run {i_run + 1}: No feasible solution found.&quot;)
            current_problem_run_distances.append(float(&#x27;inf&#x27;)) # Record as infeasible

    # 5. Calculate aggregated results for the current problem instance
    aco_avg_dist_str = &quot;N/A&quot;
    aco_best_dist_str = &quot;N/A&quot;
    num_vehicles_str = &quot;N/A&quot;
    raw_best_dist_val = float(&#x27;inf&#x27;)

    if current_problem_run_distances and any(d != float(&#x27;inf&#x27;) for d in current_problem_run_distances):
        valid_distances = [d for d in current_problem_run_distances if d != float(&#x27;inf&#x27;)]
        if valid_distances:
            avg_val = np.mean(valid_distances)
            best_val = np.min(valid_distances) # This is best_distance_for_this_problem_overall

            aco_avg_dist_str = f&quot;{avg_val:.2f}&quot;
            aco_best_dist_str = f&quot;{best_val:.2f}&quot;
            raw_best_dist_val = best_val
            if best_routes_for_this_problem:
                num_vehicles_str = str(len(best_routes_for_this_problem))

    all_benchmarks_results.append({
        &quot;Problem&quot;: problem_display_name,
        &quot;ACO Avg&quot;: aco_avg_dist_str,
        &quot;ACO Best&quot;: aco_best_dist_str,
        &quot;Num Vehicles (Best Run)&quot;: num_vehicles_str, # Add info on number of vehicles used
        &quot;Raw ACO Best&quot;: raw_best_dist_val # Numeric value for easy sorting in Excel
    })
    print(f&quot;--- Benchmark Completed for Problem: {problem_display_name} ---&quot;)
    print(f&quot;Results: Avg={aco_avg_dist_str}, Best={aco_best_dist_str}, Vehicles (best run)={num_vehicles_str}&quot;)


# --- DISPLAY AND SAVE AGGREGATED RESULTS TABLE ---
print(&quot;\\n\\n========== BENCHMARK RESULTS SUMMARY ==========&quot;)
# Format header for table
header_format = f&quot;{&#x27;Problem&#x27;:&lt;15} | {&#x27;ACO Avg&#x27;:&lt;10} | {&#x27;ACO Best&#x27;:&lt;10} | {&#x27;Vehicles&#x27;:&lt;8}&quot;
print(header_format)
print(&quot;-&quot; * (15 + 3 + 10 + 3 + 10 + 3 + 8))

for result_row in all_benchmarks_results:
    row_format = f&quot;{result_row[&#x27;Problem&#x27;]:&lt;15} | {result_row[&#x27;ACO Avg&#x27;]:&lt;10} | {result_row[&#x27;ACO Best&#x27;]:&lt;10} | {result_row[&#x27;Num Vehicles (Best Run)&#x27;]:&lt;8}&quot;
    print(row_format)

# Save to Excel file
summary_excel_filename = &quot;ACO_Dethloff_Benchmark_Summary.xlsx&quot;
# Create sheet name based on run timestamp to avoid overwriting if run again
import datetime
timestamp_str = datetime.datetime.now().strftime(&quot;%Y%m%d_%H%M&quot;)
sheet_name = f&quot;Summary_{timestamp_str}&quot;

save_summary_table_to_excel(all_benchmarks_results, summary_excel_filename, sheet_name)</code></pre>
        `
    },
    {
        title: "SECTION 5: RESULTS AND EVALUATION",
        content: `
            <p><h1>SECTION 5: RESULTS AND EVALUATION</h1></p>
        `
    },
    {
        title: "Content",
        content: `
            <p>This section presents and analyzes the results obtained from running the implemented Ant Colony Optimization (ACO) algorithm on Dethloff-style VRPSPD benchmark datasets. The results are aggregated after 10 runs for each instance.</p>
        `
    },
    {
        title: "1. Experimental Setup",
        content: `
            <p><h3>1. Experimental Setup</h3></p>
            
            <p><strong>Environment:</strong> The algorithm was executed in a Python 3.x environment using NumPy, Matplotlib, and OpenpyXL libraries.</p>
            
            <p><strong>Benchmark Datasets:</strong></p>
            <p><em> Base customer data from \`dethloff_benchmark.csv\` (generated with \`random.seed(42)\` for baseline data consistency).</p>
            <p></em> Tested problem instances: \`SCA_mu3\`, \`SCA_mu8\`, \`CON_mu3\`, \`CON_mu8\`.</p>
            
            <p><strong>ACO Algorithm Parameters:</strong> (These values correspond to the configuration in the benchmark execution cell)</p>
            <p><em> Number of runs per instance (\`N_ACO_RUNS\`): 10 runs.</p>
            <p></em> Number of ants (\`num_ants_config\`): 20 ants.</p>
            <p><em> Number of iterations (\`num_iterations_config\`): 100 iterations.</p>
            <p></em> ACO Control Parameters:</p>
            <p>  <em> $\\alpha$ (Pheromone Weight): 1.0</p>
            <p>  </em> $\\beta$ (Heuristic Weight): 4.0 (adjusted per suggestions from the Çatay paper)</p>
            <p>  <em> $\\rho$ (Evaporation Rate): 0.1</p>
            <p>  </em> $q_0$ (ACS Selection Parameter): 0.7 (adjusted per suggestions from the Çatay paper)</p>
            <p><em> ACO Strategy: MAX-MIN Ant System (MMAS) with pheromone initialization based on $L_0$ (from \`_robust_nn_heuristic\`) and updates by the best-so-far ant.</p>
            <p></em> Heuristic Function ($\\eta_{ij}$): Based on the Savings Function $S_{ij}$ (assuming the dynamic component $R_j$ equals 1).</p>
        `
    },
    {
        title: "2. Benchmark Results",
        content: `
            <p><h3>2. Benchmark Results</h3></p>
            
            <p>The aggregated results of the benchmark runs are presented in the table below:</p>
            
            <p>| Problem   | ACO Avg   | ACO Best  | Vehicles (Best Run) |</p>
            <p>| :-------- | :-------- | :-------- | :------------------ |</p>
            <p>| SCA_mu3   | 809.64    | 785.73    | 4                   |</p>
            <p>| SCA_mu8   | 1217.46   | 1182.63   | 9                   |</p>
            <p>| CON_mu3   | 939.75    | 883.96    | 4                   |</p>
            <p>| CON_mu8   | 1096.46   | 1067.85   | 9                   |</p>
            
            <p><em>(Note: "ACO Avg" and "ACO Best" values represent total distance. "Vehicles (Best Run)" indicates the number of vehicles used in the solution corresponding to the "ACO Best" result for that instance)</em>.</p>
        `
    },
    {
        title: "3. Evaluation and Analysis",
        content: `
            <p><h3>3. Evaluation and Analysis</h3></p>
            
            <p><strong>a) Solution Quality (\`ACO Best\`):</strong></p>
            
            <p><em> The algorithm successfully found feasible solutions for all four tested Dethloff-style instances. This is a positive indicator of the correctness of the core VRPSPD constraint handling logic.</p>
            
            <p></em> <strong>Impact of $\\mu$ (Vehicle Capacity):</strong></p>
            <p>  <em> For the SCA scenario: \`SCA_mu3\` (larger capacity, $\\mu=3$) yielded \`ACO Best = 785.73\`, significantly better than \`SCA_mu8\` (smaller capacity, $\\mu=8$) with \`ACO Best = 1182.63\`. This reflects expectations: larger vehicle capacity allows for more optimized routes regarding total distance, likely due to requiring fewer vehicles or routes being less constrained by load limits.</p>
            
            <p>  </em> For the CON scenario: Similarly, \`CON_mu3\` (\`ACO Best = 883.96\`) outperformed \`CON_mu8\` (\`ACO Best = 1067.85\`).</p>
            
            <p><em> Impact of Geographic Scenario (SCA vs. CON):</p>
            <p>  </em> When $\\mu=3$ (large capacity): \`SCA_mu3\` (785.73) performed better than \`CON_mu3\` (883.96). This suggests that with high-capacity vehicles, scattered customers (SCA) might be easier to optimize compared to the CON scenario, where the concentration of a customer group might create specific routing challenges.</p>
            
            <p>  <em> When $\\mu=8$ (small capacity): \`CON_mu8\` (1067.85) actually performed slightly better than \`SCA_mu8\` (1182.63). This is interesting and suggests that when vehicle capacity is small (requiring more vehicles), having a customer cluster (CON) might allow vehicles to serve that cluster more efficiently, whereas in the SCA scenario, small vehicles might have to travel more between dispersed customers.</p>
            
            <p><strong>b) Algorithm Stability (Comparison of \`ACO Avg\` and \`ACO Best\`):</strong></p>
            
            <p></em> \`SCA_mu3\`: Avg (809.64) vs. Best (785.73). Deviation $\\approx 23.91$ ($\\approx 3.04\\%$ relative to Best).</p>
            
            <p><em> \`SCA_mu8\`: Avg (1217.46) vs. Best (1182.63). Deviation $\\approx 34.83$ ($\\approx 2.95\\%$ relative to Best).</p>
            
            <p></em> \`CON_mu3\`: Avg (939.75) vs. Best (883.96). Deviation $\\approx 55.79$ ($\\approx 6.31\\%$ relative to Best).</p>
            
            <p><em> \`CON_mu8\`: Avg (1096.46) vs. Best (1067.85). Deviation $\\approx 28.61$ ($\\approx 2.68\\%$ relative to Best).</p>
            
            <p></em> Overall, the algorithm demonstrates good stability for \`SCA_mu3\`, \`SCA_mu8\`, and especially \`CON_mu8\`, with a relatively low deviation between average and best results (under 3.5%). The \`CON_mu3\` instance shows a slightly higher deviation (approx. 6.31%), suggesting the algorithm might be more sensitive to random initialization or search structure in this case, though it still found a good solution.</p>
            
            <p><strong>c) Number of Vehicles Used (\`Vehicles (Best Run)\`):</strong></p>
            
            <p><em> \`SCA_mu3\`: 4 vehicles.</p>
            <p></em> \`SCA_mu8\`: 9 vehicles.</p>
            <p><em> \`CON_mu3\`: 4 vehicles.</p>
            <p></em> \`CON_mu8\`: 9 vehicles.</p>
            
            <p>  The number of vehicles used increased significantly as vehicle capacity decreased (i.e., when $\\mu$ increased from 3 to 8), from 4 vehicles to 9 vehicles for both SCA and CON scenarios. This is entirely logical. The number of vehicles used (4 when $\\mu=3$, 9 when $\\mu=8$) also closely reflects the $\\mu$ value (assumed minimum vehicles), indicating the algorithm is attempting to use vehicles efficiently.</p>
            
            <p><strong>d) Comparison with Reference Results (e.g., Çatay or Montané & Galvão papers):</strong></p>
            
            <p><em> For a more comprehensive assessment, we can compare these \`ACO Best\` values with published results from Table 1 in the paper \`Ant Colony Optimization and Its Application to the Vehicle Routing Problem with Pickups and Deliveries\` (https://research.sabanciuniv.edu/id/eprint/13212/1/optimization.pdf):</p>
            
            <p>  </em> \`SCA3-0\` (Best MG): 640.47. Our result \`SCA_mu3\` is 785.73.</p>
            <p>  <em> \`CON3-0\` (Best MG): 648.92. Our result \`CON_mu3\` is 883.96.</p>
            <p>  </em> \`SCA8-0\` (Best MG): 1187.62. Our result \`SCA_mu8\` is 1182.63.</p>
            <p>  <em> \`CON8-0\` (Best MG): 1202.19. Our result \`CON_mu8\` is 1067.85.</p>
            
            <p></em> <strong>Comparative Analysis:</strong></p>
            <ul>
                <li>For the $\\mu=3$ instances (\`SCA_mu3\`, \`CON_mu3\`), our results are higher than the "Best MG", indicating significant potential for improvement in these cases.</li>
            </ul>
        `
    },
    {
        title: "SECTION 6: PROPOSED ENHANCEMENTS",
        content: `
            <p><h1>SECTION 6: PROPOSED ENHANCEMENTS</h1></p>
            
            <p>This section outlines the proposed improvements to the current ACO implementation for solving VRPSPD. The enhancements focus on refining the visibility (heuristic) function and adopting a hybrid ACO strategy to improve solution quality and algorithm robustness.</p>
        `
    },
    {
        title: "1. Enhanced Visibility Function (Hàm Visibility Cải Tiến)",
        content: `
            <p><h3>1. Enhanced Visibility Function (Hàm Visibility Cải Tiến)</h3></p>
            
            <p>The visibility function $\\eta_{ij}$ plays a crucial role in guiding ants' decisions during route construction. We propose a multi-component visibility function that considers both spatial distribution of customers and vehicle load dynamics.</p>
            
            <p><strong>a) Component 1: Enhanced Savings Function</strong></p>
            
            <p>Building upon Paessens' parametrical savings formula, we incorporate geometric considerations:</p>
            
            <p>$$S_{ij} = c_{i0} + c_{0j} - \\lambda c_{ij} + \\mu \\cos(\\theta_{ij})|c_{0i} - c_{j0}|$$</p>
            
            <p>Where:</p>
            <p><em> $c_{ij}$: distance between nodes $i$ and $j$</p>
            <p></em> $\\theta_{ij}$: angle formed by rays from depot to customers $i$ and $j$</p>
            <p><em> $\\lambda, \\mu$: adjustment parameters</p>
            
            <p><strong>Key advantages:</strong></p>
            <p></em> Considers the geographical distribution of customers in 2D space</p>
            <p><em> The angular term $\\cos(\\theta_{ij})$ promotes compact routes by penalizing wide-angle connections</p>
            <p></em> The distance difference term $|c_{0i} - c_{j0}|$ encourages radial route structure from the depot</p>
            
            <p><strong>b) Component 2: Load-based Dynamic Adjustment</strong></p>
            
            <p>To address the "put first larger items" principle in pickup and delivery scenarios:</p>
            
            <p>$$R_j = \\begin{cases}</p>
            <p>\\max\\left(\\frac{P_j}{\\bar{P}}, \\frac{D_j}{\\bar{D}}\\right) & \\text{if } \\min(\\sum P_k, \\sum D_k) > \\frac{Q}{2} \\\\</p>
            <p>1 & \\text{otherwise}</p>
            <p>\\end{cases}$$</p>
            
            <p>Where:</p>
            <p><em> $P_j, D_j$: pickup and delivery demand at customer $j$</p>
            <p></em> $\\bar{P}, \\bar{D}$: average pickup and delivery demand across unvisited customers</p>
            <p><em> $Q$: vehicle capacity</p>
            <p></em> $\\sum P_k, \\sum D_k$: current vehicle load (pickup and delivery)</p>
            
            <p><strong>Key advantages:</strong></p>
            <p><em> Prioritizes customers with larger demands when vehicle is already half-loaded</p>
            <p></em> Remains inactive ($R_j = 1$) during early route construction, preserving distance-based heuristic</p>
            <ul>
                <li>Helps prevent infeasible routes by strategically placing high-demand customers</li>
            </ul>
            
            <p><strong>c) Combined Visibility Function</strong></p>
            
            <p>The final visibility function integrates both components:</p>
            
            <p>$$\\eta_{ij} = S_{ij} \\times R_j$$</p>
            
            <p>This formulation balances spatial optimization (through $S_{ij}$) with load management (through $R_j$).</p>
        `
    },
    {
        title: "2. Hybrid ACO Strategy",
        content: `
            <p><h3>2. Hybrid ACO Strategy</h3></p>
            
            <p>To improve solution quality and algorithm stability, we propose a hybrid strategy combining elements from multiple successful ACO variants:</p>
            
            <p><strong>a) Pseudo-random Proportional Rule (from Ant Colony System - ACS)</strong></p>
            
            <p>Modify the state transition rule to balance exploitation and exploration:</p>
            
            <p>$$j = \\begin{cases}</p>
            <p>\\arg\\max_{u \\in N_i^k} \\left[\\tau_{iu}\\right]^\\alpha \\left[\\eta_{iu}\\right]^\\beta & \\text{if } q \\leq q_0 \\text{ (exploitation)} \\\\</p>
            <p>\\text{Probabilistic selection} & \\text{otherwise (exploration)}</p>
            <p>\\end{cases}$$</p>
            
            <p>Where:</p>
            <p><em> $q \\sim U(0,1)$: random number</p>
            <p></em> $q_0$: parameter controlling exploitation vs. exploration balance (typically 0.7-0.9)</p>
            <p><em> $N_i^k$: feasible neighborhood for ant $k$ at node $i$</p>
            
            <p><strong>Key advantages:</strong></p>
            <p></em> $q_0$ parameter provides fine-grained control over exploration behavior</p>
            <p><em> Higher $q_0$ values (e.g., 0.9) favor intensification around best solutions</p>
            <p></em> Lower $q_0$ values (e.g., 0.7) encourage broader search space exploration</p>
            
            <p><strong>b) Rank-based Pheromone Update</strong></p>
            
            <p>Instead of allowing all ants to deposit pheromones, implement selective updating:</p>
            
            <p>$$\\tau_{ij} \\leftarrow (1-\\rho)\\tau_{ij} + \\sum_{r=1}^{\\sigma-1} \\left(\\sigma - r\\right) \\Delta\\tau_{ij}^r$$</p>
            
            <p>Where:</p>
            <p><em> $\\sigma$: number of top-ranked ants allowed to update (e.g., top 5 ants)</p>
            <p></em> $r$: rank of ant ($r=1$ is best)</p>
            <p><em> $\\Delta\\tau_{ij}^r = Q/L_r$ for edges in the $r$-th ranked solution</p>
            <p></em> Weighting factor $(\\sigma - r)$ gives more pheromone to better solutions</p>
            
            <p><strong>Key advantages:</strong></p>
            <p><em> Focuses search around high-quality solutions</p>
            <p></em> Reduces noise from poor-quality solutions</p>
            <p><em> Helps avoid local optima through selective reinforcement</p>
            
            <p><strong>c) MMAS Pheromone Bounds (Min-Max Ant System)</strong></p>
            
            <p>Maintain the existing pheromone bounds mechanism:</p>
            
            <p>$$\\tau_{ij} \\in [\\tau_{\\min}, \\tau_{\\max}]$$</p>
            
            <p>With:</p>
            <p></em> $\\tau_{\\max} = \\frac{1}{\\rho \\cdot L_{best}}$ (where $L_{best}$ is best-so-far solution cost)</p>
            <p><em> $\\tau_{\\min} = \\frac{\\tau_{\\max}}{2n}$ (where $n$ is number of customers)</p>
            
            <p><strong>Key advantages:</strong></p>
            <p></em> Prevents premature convergence by maintaining minimum exploration</p>
            <p><em> Limits excessive pheromone accumulation on dominant edges</p>
            <p></em> Ensures all edges retain some probability of being selected</p>
            
            <p><strong>d) Integration and Implementation Strategy</strong></p>
            
            <p>The hybrid approach combines these three elements:</p>
            
            <ol>
                <li><strong>Initialization Phase:</strong></li>
            </ol>
            <p>   - Use robust Nearest Neighbor heuristic to compute $L_0$</p>
            <p>   - Initialize pheromones: $\\tau_{ij} = \\tau_{\\max} = \\frac{1}{\\rho \\cdot L_0}$</p>
            
            <ol>
                <li><strong>Solution Construction Phase:</strong></li>
            </ol>
            <p>   - Apply pseudo-random proportional rule for state transitions</p>
            <p>   - Use enhanced visibility function $\\eta_{ij}$ incorporating savings and load components</p>
            
            <ol>
                <li><strong>Pheromone Update Phase:</strong></li>
            </ol>
            <p>   - Evaporate all pheromones: $\\tau_{ij} \\leftarrow (1-\\rho)\\tau_{ij}$</p>
            <p>   - Rank all ant solutions by cost</p>
            <p>   - Apply rank-based update using top $\\sigma$ ants</p>
            <p>   - Enforce MMAS bounds on all pheromone values</p>
            
            <ol>
                <li><strong>Adaptive Parameter Tuning:</strong></li>
            </ol>
            <p>   - Monitor convergence metrics (e.g., solution diversity)</p>
            <p>   - Adjust $q_0$ dynamically: increase for intensification, decrease for diversification</p>
            <p>   - Reset pheromones to $\\tau_{\\max}$ if stagnation detected</p>
            
            <p><strong>Expected Improvements:</strong></p>
            
            <p>Based on these enhancements, we anticipate:</p>
            <p><em> <strong>Better solution quality:</strong> Enhanced visibility should guide ants toward more promising regions, particularly for $\\mu=3$ instances where current performance lags reference results</p>
            <p></em> <strong>Improved stability:</strong> Rank-based updates and MMAS bounds should reduce variance between runs</p>
            <p><em> <strong>Faster convergence:</strong> Pseudo-random rule with appropriate $q_0$ should balance search efficiency</p>
            <p></em> <strong>Robustness across instances:</strong> Multi-component heuristic should adapt better to different problem characteristics (SCA vs. CON scenarios)</p>
        `
    },
    {
        title: "References",
        content: `
            <p><h1>References</h1></p>
        `
    },
    {
        title: "Content",
        content: `
            <ol>
                <li>Altınel,</li>
            </ol>
            <p>I.K.,</p>
            <p>Oncan, T.: A new enhancemant of the Clarke and Wright savings heuristic</p>
            <p>for the capacitated vehicle routing problem. Journal of the Operational Research Soci-</p>
            <p>ety 56, 954–961 (2005)</p>
            <ol>
                <li>Angelelli, E., Mansini, R.: The vehicle routing problem with time windows and simulta-</li>
            </ol>
            <p>neous pick-up and delivery. In: Klose, A., Speranza, M.G., Van Wassenhove, L.N. (eds.)</p>
            <p>Quantitative approaches to distribution logistics and supply chain management series.</p>
            <p>Lecture Notes in Economics and Mathematical Systems, vol. 519, pp. 249–267. Springer,</p>
            <p>Berlin (2002)</p>
            <ol>
                <li>Bianchessi, N., Righini, G.: Heuristic algorithms for the vehicle routing problem with</li>
            </ol>
            <p>simultaneous pick-up and delivery. Computers and Operations Research 34, 578–594</p>
            <p>(2007)</p>
            <ol>
                <li>Brand˜ ao, J.: A new tabu search algorithm for the vehicle routing problem with backhauls.</li>
            </ol>
            <p>European Journal of Operational Research 173, 540–555 (2006)</p>
            <ol>
                <li>Bullnheimer, B., Hartl, R.F., Strauss, C.: Applying the ant system to the vehicle routing</li>
            </ol>
            <p>problem. In: Voss, S., et al. (eds.) Meta-heuristics: Advances and trends in local search</p>
            <p>paradigms for optimization, pp. 285–296. Kluwer Academic Publishers, Boston (1998)</p>
            <ol>
                <li>Bullnheimer, B., Hartl, R.F., Strauss, C.: An improved ant system algorithm for the ve-</li>
            </ol>
            <p>hicle routing problem. Annals of Operations Research 89, 319–328 (1999)</p>
            <ol>
                <li>Casco, D.O., Golden, B.L., Wasil, E.A.: Vehicle routing with backhauls: models, algo-</li>
            </ol>
            <p>rithms, and case studies. In: Golden, B.L., Assad, A.A. (eds.) Vehicle routing: Methods</p>
            <p>and studies, pp. 127–147. Elsevier, Amsterdam (1988)</p>
            <ol>
                <li>Chen, J.F., Wu, T.H.: Vehicle routing problem with simultaneous deliveries and pickups.</li>
            </ol>
            <p>Journal of the Operational Research Society 57, 579–587 (2006)</p>
            <ol>
                <li>Christofides, N., Mingozzi, A., Toth, P.: The vehicle routing problem. In: Christofides,</li>
            </ol>
            <p>N., et al. (eds.) Combinatorial optimization, pp. 315–338. Wiley, Chichester (1979)</p>
            <ol>
                <li>Clarke, G., Wright, W.: Scheduling of vehicles from a central depot to a number of</li>
            </ol>
            <p>delivery points. Operations Research 12, 568–581 (1964)</p>
            <ol>
                <li>Colorni, A., Dorigo, M., Maniezzo, V., Trubian, M.: Ant system for job-shop schedul-</li>
            </ol>
            <p>ing. Belgian Journal of Operations Research, Statistics and Computer Science 34, 39–45</p>
            <p>(1994)</p>
            <ol>
                <li>Crispim, J., Brand˜ ao, J.: Metaheuristics applied to mixed and simultaneous extensions</li>
            </ol>
            <p>of vehicle routing problems with backhauls. Journal of the Operational Research Soci-</p>
            <p>ety 56, 1296–1302 (2005)</p>
            <ol>
                <li>Dethloff, J.: Vehicle routing and reverse logistics: the vehicle routing problem with si-</li>
            </ol>
            <p>multaneous delivery and pick-up. OR Spektrum 23, 79–96 (2001)</p>
            <ol>
                <li>Doerner, K.F., Gronalt, M., Hartl, R.F., Reimann, M., Strauss, C., Stummer, M.: Sav-</li>
            </ol>
            <p>ingsAnts for the vehicle routing problem. In: Cagnoni, S., Gottlieb, J., Hart, E., Midden-</p>
            <p>dorf, M., Raidl, G.R. (eds.) EvoWorkshops 2002. LNCS, vol. 2279, pp. 11–20. Springer,</p>
            <p>Heidelberg (2002)</p>
            <ol>
                <li>Dorigo, M.: Optimization, learning and natural algorithms (in Italian), PhD Thesis, Di-</li>
            </ol>
            <p>partimento di Elettronica, Politecnico di Milano, Italy (1992)</p>
            <ol>
                <li>Dorigo, M.: Ant colony optimization. Scholarpedia 2(3), 1461 (2008)</li>
                <li>Dorigo, M., Gambardella, L.M.: Ant colony system: A cooperative learning approach</li>
            </ol>
            <p>to the traveling salesman problem. IEEE Transactions on Evolutionary Computation 1,</p>
            <p>53–66 (1997)</p>
            <ol>
                <li>Dorigo, M., Maniezzo, V., Colorni, A.: The ant system: Optimization by a colony of</li>
            </ol>
            <p>cooperating agents. IEEE Transactions on Systems, Man, and Cybernetics-Part B 26,</p>
            <p>29–41 (1996)</p>
            <ol>
                <li>Dorigo, M., St¨ utzle, T.: Ant colony optimization. MIT Press, Cambridge (2004)</li>
                <li>Doyuran, T., C ¸ atay, B.: Two enhanced savings functions for the Clark-Wright algo-</li>
            </ol>
            <p>rithm. In: Blecker, T., Kersten, W., Gertz, C. (eds.) Management in logistics networks</p>
            <p>and nodes: Concepts, technology and applications. Series on Operations and Technology</p>
            <p>Management, vol. 8, pp. 245–258. Erich Schmidt Verlag, Berlin (2008)</p>
            <ol>
                <li>Gambardella, L.M., Dorigo, M.: Ant colony system hybridized with a new local search</li>
            </ol>
            <p>for the sequential ordering problem. INFORMS Journal on Computing 12, 237–255</p>
            <p>(2000)</p>
            <ol>
                <li>Gambardella, L.M., Taillard, E., Agazzi, G.: MACS-VRPTW: a multiple ant colony sys-</li>
            </ol>
            <p>tem for vehicle routing problems with time windows. In: Corne, D., Dorigo, M., Glover,</p>
            <p>F. (eds.) New ideas in optimization, pp. 63–76. McGraw-Hill, London (1999)</p>
            <ol>
                <li>Goetschalckx, M., Jacobs-Blecha, C.: The vehicle routing problem with backhauls. Eu-</li>
            </ol>
            <p>ropean Journal of Operational Research 42, 39–51 (1989)</p>
            <ol>
                <li>Golden, B., Baker, A.J., Schaffer, J.: The vehicle routing problem with backhauling: two</li>
            </ol>
            <p>approaches. In: Hammesfahr, R.D. (ed.) Proceedings of the 21st Annual Meeting of S.E.,</p>
            <p>TIMS, Myrtle Beach, USA, pp. 90–92 (1985)</p>
            <ol>
                <li>Halse, K.: Modeling and solving complex vehicle routing problems. PhD Thesis, De-</li>
            </ol>
            <p>partment of Mathematical Modeling, Technical University of Denmark (1992)</p>
            <ol>
                <li>Min, H.: The multiple vehicle routing problem with simultaneous delivery and pick-up</li>
            </ol>
            <p>points. Transportation Research 23A, 377–386 (1989)</p>
            <ol>
                <li>Montan´ e, F.A.T., Galv˜ ao, R.D.: A tabu search algorithm for the vehicle routing problem</li>
            </ol>
            <p>with simultaneous pick-up and delivery service. Computers and Operations Research 33,</p>
            <p>595–619 (2006)</p>
            <ol>
                <li>Nagy, G., Salhi, S.: Heuristic algorithms for single and multiple depot vehicle routing</li>
            </ol>
            <p>problems with pickups and deliveries. European Journal of Operational Research 162,</p>
            <p>126–141 (2005)</p>
            <ol>
                <li>Paessens, H.: The savings algorithm for the vehicle routing problem. European Journal</li>
            </ol>
            <p>of Operational Research 34(3), 336–344 (1988)</p>
            <ol>
                <li>Reimann, M., Doerner, K.F., Hartl, R.F.: Insertion based ants for vehicle routing prob-</li>
            </ol>
            <p>lems with backhauls and time windows. In: Dorigo, M., Di Caro, G.A., Sampels, M.</p>
            <p>(eds.) Ant Algorithms 2002. LNCS, vol. 2463, pp. 135–148. Springer, Heidelberg (2002)</p>
            <ol>
                <li>Reimann, M., Doerner, K., Hartl, R.F.: Analyzing a unified ant system for the VRP and</li>
            </ol>
            <p>some of its variants. In: Raidl, G.R., Cagnoni, S., Cardalda, J.J.R., Corne, D.W., Gottlieb,</p>
            <p>J., Guillot, A., Hart, E., Johnson, C.G., Marchiori, E., Meyer, J.-A., Middendorf, M.</p>
            <p>(eds.) EvoWorkshops 2003. LNCS, vol. 2611, pp. 300–310. Springer, Heidelberg (2003)</p>
            <ol>
                <li>Ropke, S., Pisinger, D.: A unified heuristic for vehicle routing problems with backhauls.</li>
            </ol>
            <p>European Journal of Operational Research 171, 750–775 (2006)</p>
            <ol>
                <li>Salhi, S., Nagy, G.: A cluster insertion heuristic for single and multiple depot vehicle</li>
            </ol>
            <p>routing problems with backhauling. Journal of the Operational Research Society 50,</p>
            <p>1034–1042 (1999)</p>
            <ol>
                <li>St¨ utzle, T., Dorigo, M.: ACO algorithms for the quadratic assignment problem. In:</li>
            </ol>
            <p>Corne, D., Dorigo, M., Glover, F. (eds.) New ideas in optimization, pp. 33–50. McGraw-</p>
            <p>Hill, London (1999)</p>
            <ol>
                <li>St¨ utzle, T., Hoos, H.H.: The MAX-MIN ant system and local search for the traveling</li>
            </ol>
            <p>salesman problem. In: B¨ ack, T., Michalewicz, Z., Yao, X. (eds.) Proceedings of the 1997</p>
            <p>IEEE International Conference on Evolutionary Computation (ICEC 1997), pp. 309–</p>
            <ol>
                <li>IEEE Press, Piscataway (1997)</li>
                <li>Toth, P., Vigo, D.: An exact algorithm for the vehicle routing problem with backhauls.</li>
            </ol>
            <p>Transportation Science 31, 372–385 (1997)</p>
            <ol>
                <li>Vural, A.V., C ¸ atay, B., Eksioglu, B.: A dual GA approach to capacitated vehicle routing</li>
            </ol>
            <p>problem with simultaneous pick-up and deliveries. In: Proceedings of the IIE Research</p>
            <p>Conference (CD-ROM), Atlanta, GA (2005)</p>
            <ol>
                <li>Wade, A., Salhi, S.: An ant system algorithm for the vehicle routing problems with back-</li>
            </ol>
            <p>hauls. In: De Sousa, J.P. (ed.) Proceedings of the 4th Metaheuristics International Con-</p>
            <p>ference (MIC 2001), Porto, Portugal, pp. 99–203 (2001)</p>
            <ol>
                <li>Wade, A., Salhi, S.: An ant system algorithm for the mixed vehicle routing problem with</li>
            </ol>
            <p>backhauls. In: Resende, M.G., de Sousa, J.P. (eds.) Metaheuristics: Computer decision-</p>
            <p>making, pp. 699–719. Kluwer, New York (2003)</p>
            <ol>
                <li>Wassan, N.A., Wassan, A.H., Nagy, G.: A reactive tabu search algorithm for the vehi-</li>
            </ol>
            <p>cle routing problem with simultaneous pickups and deliveries. Journal of Combinatorial</p>
            <p>Optimization 15, 368–386 (2008)</p>
        `
    }
];
