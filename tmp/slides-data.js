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
        `
    },
    {
        title: "Problem Statement",
        content: `
            <p>Many problems in transportation and logistics can be formulated as optimization problems, where the objective is to minimize cost, distance, or time while satisfying a set of constraints. A large number of these problems are computationally difficult, especially as the problem size increases. One well-known example is the Vehicle Routing Problem (VRP), which focuses on determining optimal routes for a fleet of vehicles that start and end at a central depot while serving a set of customers [5, 6, 14, 22, 30, 31].</p>
            
            <p>In the classical VRP, customers require only delivery services. However, many real-world scenarios require vehicles to both deliver and collect goods during the same route. This leads to the Vehicle Routing Problem with Pickups and Deliveries (VRPPD) [28]. In VRPPD, the load of a vehicle changes dynamically along its route, making it more complex than the classical VRP. In particular, vehicle capacity constraints must be satisfied at all times during the route.</p>
            
            <p>Several important variants of VRPPD have been studied in the literature. The Vehicle Routing Problem with Backhauls (VRPB) assumes that all delivery customers are served before any pickup customer. A more general and challenging variant is the Mixed Vehicle Routing Problem with Backhauls (MVRPB), where delivery and pickup customers can be visited in any order. Another variant is the Vehicle Routing Problem with Simultaneous Pickups and Deliveries (VRPSPD), where both pickup and delivery operations may occur at the same customer location</p>
            <p>.</p>
            
            <p>Among these variants, MVRPB and VRPSPD are particularly difficult because vehicle load feasibility must be maintained throughout the entire route regardless of the visiting sequence. This requirement significantly increases the complexity of the problem. As a result, these variants are classified as NP-hard, making exact solution approaches impractical for large-scale problem instances.</p>
        `
    },
    {
        title: "Applications",
        content: `
            <p>Vehicle Routing Problems with Pickups and Deliveries arise in many real-world logistics applications. A common example is the distribution of bottled beverages, where full bottles are delivered to customers and empty bottles are collected for recycling or reuse [11]. Similar situations occur in the chemical industry, where containers or residual materials must be retrieved after delivery [9].</p>
            
            <p>Other applications include laundry services, in which clean clothes are delivered and used clothes are collected, as well as rental and reverse logistics systems. Waste collection and postal services may also involve both pickup and delivery operations within the same routing process [11]. These applications demonstrate the practical importance of VRPPD, as efficient routing solutions can significantly reduce operational costs and improve service quality.</p>
        `
    },
    {
        title: "Literature Review",
        content: `
            <p>Due to the computational difficulty of VRPPD and its variants, many solution methods have been proposed in previous studies. Early approaches mainly relied on simple heuristic techniques, such as load-based insertion heuristics [7, 24, 33]. These methods construct routes incrementally while checking capacity constraints. Although they are fast and easy to implement, their solution quality is often limited.</p>
            
            <p>More advanced approaches use metaheuristic algorithms. Tabu Search (TS) has been widely applied to VRPPD by exploring solution neighborhoods while avoiding repeated search patterns [12]. TS is effective in improving local solutions, but its performance [27, 3] depends heavily on parameter tuning and neighborhood design.</p>
            
            <p>Large Neighborhood Search (LNS) [32] is another powerful approach that has been used for VRPPD. By repeatedly removing and reinserting parts of a solution, LNS can escape local optima and produce high-quality solutions. However, LNS can be computationally expensive, especially for large instances.</p>
            
            <p>Genetic Algorithms (GA) [37] have also been applied to VRPPD as population-based search methods [16]. GAs provide strong global exploration capabilities through crossover and mutation. Nevertheless, designing genetic operators that preserve feasibility in VRPPD is challenging, which increases implementation complexity.</p>
            
            <p>Although these methods have achieved promising results, they still face difficulties in balancing solution quality, computational efficiency, and feasibility management. These challenges motivate the exploration of alternative solution methods for complex VRPPD variants such as MVRPB and VRPSPD [5, 6].</p>
        `
    },
    {
        title: "Motivation for Using Ant Colony Optimization",
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
        `
    },
    {
        title: "Overview of Ant Colony Optimization",
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
        title: "The Ant Algorithm for VRPPD",
        content: `
        `
    },
    {
        title: "Initialization",
        content: `
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
        title: "Heuristic Information Design ($\\eta_{ij}$)",
        content: `
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
        title: "Route Construction",
        content: `
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
        title: "Local Search",
        content: `
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
        title: "Pheromone Update",
        content: `
            
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
        `
    },
    {
        title: "ACO Class Implementation",
        content: `
        `
    },
    {
        title: "Explanation of the \`AntColonyOptimizer\` Class",
        content: `
            
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
        `
    },
    {
        title: "Benchmark Datasets based on Dethloff-style VRPSPD instances",
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
        `
    },
    {
        title: "Creation and Preparation of Benchmark Datasets",
        content: `
            
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
        title: "Creation and Preparation of Benchmark Datasets (continue)",
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
        `
    },
        {
        title: "SECTION 4: BENCHMARK TESTING",
        content: `
        `
    },
    {
        title: "Defining Helper Functions for Exporting Test Results and Visualization",
        content: `
        Implementation Code
        `
    },
    {
        title: "DethCON Instance Single Test",
        content: `
            <p><h3>Implementation Code</h3></p>
        `
    },
    {
        title: "DethSCA Instance Single Test",
        content: `
            <p><h3>Implementation Code</h3></p>
        `
    },
    
    {
        title: "Benchmark Testing",
        content: `
            <p><h3>Implementation Code</h3></p>
        `
    },
    {
        title: "SECTION 5: RESULTS AND EVALUATION",
        content: `
        `
    },
    {
        title: "Content",
        content: `
            <p>This section presents and analyzes the results obtained from running the implemented Ant Colony Optimization (ACO) algorithm on Dethloff-style VRPSPD benchmark datasets. The results are aggregated after 10 runs for each instance.</p>
        `
    },
    {
        title: "Experimental Setup",
        content: `
            
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
        title: "Benchmark Results",
        content: `
            
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
        title: "Evaluation and Analysis",
        content: `
            
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
        title: "Enhanced Visibility Function",
        content: `
            
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
        title: "Hybrid ACO Strategy",
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
    }
];
