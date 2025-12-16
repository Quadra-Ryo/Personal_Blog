# Inverse, Monotone, and Symmetric Functions

## 1. Inverse Function (f⁻¹)

### Fundamental Requirement: Bijectivity

**Rule**: Only **bijective** functions admit an inverse function, denoted as f⁻¹.

**Motivation**: The function must be both injective and surjective to guarantee that for every element b in B, there exists **one and only one** element a in A that corresponds to it (i.e., such that f(a) = b).

1. **Surjectivity Guarantees Existence**:  
   **Explanation**: For every b in B (the new Domain), surjectivity guarantees that *there exists at least* one element a in A such that f(a) = b. There are no "gaps" in the original Codomain.

2. **Injectivity Guarantees Uniqueness**:  
   **Explanation**: Injectivity guarantees that the element a found is **unique**. Without this property, the inverse would not know which of the two (or more) a to return.

**Conclusion**: Only when it is bijective, the inverse function can be defined uniquely since we are certain it will maintain the characteristics seen in "Fundamental Rule (Properties of Correspondences)" previously.

### Definition and Transformation

* The inverse function exchanges the roles of domain and codomain: f⁻¹: B → A.
* **Formal Definition**:  
  f⁻¹(b) = a ⇔ f(a) = b  
  **In simple terms**: The inverse takes a value b (output of f) and returns its original input a.

**Example**:  
f(x) = x², f: [0, +∞) → [0, +∞).  
This means we know that both the domain and codomain have x and y ≥ 0.  
A function with this domain and codomain is by definition **bijective therefore invertible**.  
So we need to find a number x such that x² = y, that is **x = √y**.

### Observations

* **If f(x) is bijective then f⁻¹ will be bijective**
* **(x,y) ∈ graph(f) ⇔ (y,x) ∈ graph(f⁻¹)** therefore y = f(x) ⇔ f⁻¹(y) = x
* If f(x) is an invertible function **the graphs of f and f⁻¹ are perfectly symmetric with respect to the line y = x** (see photo below)

![inverse](media/functions/inverse.png)

---

## 2. Monotone Functions

A function f: A → B, where A, B ⊂ ℝ, is called monotone if, for every choice of two elements x₁, x₂ in the domain A with x₁ < x₂, the relationship between their values f(x₁) and f(x₂) always remains of the same type.  
In simple terms, if we take two random numbers x₁ and x₂ where x₂ is greater than x₁, f(x₁) is always ≤ or < or ≥ or > than f(x₂).

### General Terms

| Type of Monotonicity        | Condition for x₁ < x₂ | Description                                                  | Property     |
|-----------------------------|------------------------|--------------------------------------------------------------|--------------|
| 1. Strictly Increasing      | f(x₁) < f(x₂)          | As x increases, f(x) increases strictly.                     | Is injective.|
| 2. (Weakly) Increasing      | f(x₁) ≤ f(x₂)          | As x increases, f(x) can increase or remain constant.        |              |
| 3. Strictly Decreasing      | f(x₁) > f(x₂)          | As x increases, f(x) decreases strictly.                     | Is injective.|
| 4. (Weakly) Decreasing      | f(x₁) ≥ f(x₂)          | As x increases, f(x) can decrease or remain constant.        |              |

* **Strictly Monotone**: It is called strictly monotone if it is strictly increasing (1) or strictly decreasing (3).
* **(Weakly) Monotone**: It is called (weakly) monotone if it is increasing (2) or decreasing (4).

![increasing](media/functions/increasing.png)

In the image above we can notice that **A** is a **(Weakly) monotone** function as it is **(Weakly) increasing** since up to the orange point **f(x₁) = f(x₂)** while **B** is a **strictly monotone** function as it is **strictly increasing** since f(x₁) < f(x₂).  
Note that a horizontal line will be simultaneously **(Weakly) increasing and decreasing** since, for all possible values of x₁ and x₂, f(x₁) will equal f(x₂).

### Observations

#### **Preservation and Inversion of Order**

Monotone functions have a predictable effect on inequalities between values in the domain:

**Increasing Function (Strictly or Weakly)**:  
If f is increasing, it preserves the order.

* If x₁ < x₂, then f(x₁) < f(x₂) (if strictly increasing).
* If x₁ < x₂, then f(x₁) ≤ f(x₂) (if weakly increasing).

**Simple Explanation**: If one number is smaller than another (x₁ < x₂), the image of the first number through the increasing function f(x₁) will remain smaller (or equal) than the image of the second f(x₂). The inequality does not change direction.

**Decreasing Function (Strictly or Weakly)**:  
If f is decreasing, it inverts the order.

* If x₁ < x₂, then f(x₁) > f(x₂) (if strictly decreasing).
* If x₁ < x₂, then f(x₁) ≥ f(x₂) (if weakly decreasing).

**Simple Explanation**: If one number is smaller than another (x₁ < x₂), the image of the first number f(x₁) will become larger (or equal) than the image of the second f(x₂). The inequality changes direction (for example, from < to >).

#### **Monotonicity and Incremental Ratio**

This observation provides a very powerful mathematical way to verify strict monotonicity using the Incremental Ratio.

A function f is **strictly increasing if and only if** its Incremental Ratio is always positive:
```
  f(x₁) - f(x₂)
  ------------- > 0
   x₁ - x₂
```

for every x₁, x₂ in domain A with x₁ ≠ x₂.

**Simple Explanation**:

1. The numerator (f(x₁) - f(x₂)) is the difference between the y values (called Δy).
2. The denominator (x₁ - x₂) is the difference between the x values (called Δx).
3. The Incremental Ratio is the ratio Δy/Δx, which geometrically represents the slope of the secant line connecting the two points (x₁, f(x₁)) and (x₂, f(x₂)) on the graph.
4. For a function to be strictly increasing, the slope between any two points must always be positive (the line must "rise" going from left to right). This is guaranteed if the numerator and denominator always have the same sign: if Δx is positive, Δy must also be positive, and vice versa.

![incremental_ratio](media/functions/incremental_ratio.png)

#### **Monotonicity and Incremental Ratio (Decreasing)**

The same observation on the incremental ratio applies to strictly decreasing functions.

**Rule**: A function f is **strictly decreasing if and only if** its Incremental Ratio is always negative:
```
  f(x₁) - f(x₂)
  ------------- < 0
   x₁ - x₂
```

for every x₁ ≠ x₂ in the domain.

**Simple Explanation (Opposite Signs)**: The ratio must be negative. This means that the numerator (f(x₁) - f(x₂), the difference on the y values) and the denominator (x₁ - x₂, the difference on the x values) must have opposite signs (one positive and the other negative).

* If x₁ - x₂ > 0 (i.e., x₁ > x₂), the function is decreasing, so f(x₁) must be less than f(x₂), making the numerator negative. (Negative / Positive = Negative).

**Weak Monotonicity (Similarly)**: The same principle applies to weak monotonicity:

* f is weakly increasing if (f(x₁) - f(x₂))/(x₁ - x₂) ≥ 0.
* f is weakly decreasing if (f(x₁) - f(x₂))/(x₁ - x₂) ≤ 0.

#### **Crucial Example: f(x) = 1/x**

We analyze the hyperbola function f(x) = 1/x.

* **Domain A**: ℝ \ {0} (all real numbers except x = 0).

**Monotonicity Analysis on Separate Intervals**

The function is strictly decreasing on each of the two intervals that make up the domain:

1. **Positive Interval (0, +∞)**:
   * We choose x₁ < x₂ in (0, +∞).
   * In this interval, we have f(x₁) > f(x₂).
   * **Conclusion**: f is strictly decreasing in (0, +∞).

2. **Negative Interval (-∞, 0)**:
   * We choose x₃ < x₄ in (-∞, 0).
   * Also in this interval, we have f(x₃) > f(x₄).
   * **Conclusion**: f is strictly decreasing in (-∞, 0).

**The Counterexample**

Despite the function being decreasing in every single "piece" of the domain, the conclusion is:

**But f is not decreasing on (-∞, 0) ∪ (0, +∞).**

* **Why?** To verify monotonicity on the entire domain A, we must compare two points chosen anywhere in A.
* **Counterexample provided**: We take x₁ = -1 (in the negative domain) and x₂ = 1 (in the positive domain).
  * We choose x₁ < x₂: -1 < 1 (True).
  * We calculate the function values:
    * f(x₁) = f(-1) = 1/(-1) = -1.
    * f(x₂) = f(1) = 1/1 = 1.
  * We compare f(x₁) and f(x₂): -1 < 1, therefore f(x₁) < f(x₂).
  * **Result**: Given that x₁ < x₂ led to f(x₁) < f(x₂), the function behaved in an increasing manner in that jump, contradicting the definition of a decreasing function on the entire domain A.

**Moral of the Example**: A function must be defined as monotone on the entire set in which it is claimed to be so. If there are "jumps" or discontinuities (as at x = 0), the property cannot be extended from the intervals to their union if the property is violated in the transition between intervals.

![decresing](media/functions/decresing.png)

---

## 3. Composition of Monotone Functions

**Definition**: Let f: A → B and g: B → C be two functions.  
The composite function is (g ∘ f)(x) = g(f(x)).

The monotonicity of the composite function is determined by the combination of the monotonicity of f (inner) and g (outer).

### Fundamental Rule (Product of Signs)

The composition of functions behaves like the product of signs:

* Increasing ≈ sign + (preserves order).
* Decreasing ≈ sign - (inverts order).

| f (Inner)   | g (Outer)   | g∘f (Composite) | Product of Signs   |
|-------------|-------------|-----------------|---------------------|
| Increasing  | Increasing  | Increasing      | (+) × (+) = (+)     |
| Increasing  | Decreasing  | Decreasing      | (+) × (-) = (-)     |
| Decreasing  | Increasing  | Decreasing      | (-) × (+) = (-)     |
| Decreasing  | Decreasing  | Increasing      | (-) × (-) = (+)     |

**Observation**: The Proposition is also true for strict monotonicity.

### Example: h(x) = e^(x³)

The function h(x) = e^(x³) is obtained by composition of:

1. Inner function f(x) = x³
2. Outer function g(t) = eᵗ

* f(x) = x³ is strictly increasing.
* g(t) = eᵗ is strictly increasing.
* **Conclusion**: By the rule of product of signs (+ × +), h = g ∘ f is strictly increasing.

---

## 4. Monotonicity and Injectivity

### Fundamental Propositions

**Rule 1**: If f is strictly monotone (strictly increasing or strictly decreasing), then f is injective.

* **Explanation**: Strict monotonicity guarantees that if x₁ ≠ x₂, then f(x₁) ≠ f(x₂), which is the definition of injectivity.

**Rule 2**: The composition of injective functions is also injective.

**Warning (The Converse)**: If f is injective, f is not necessarily monotone.

* **Example**: The function f(x) = 1/x (defined on ℝ \ {0}) is injective, but we have seen that it is not monotone on the entire domain (it behaves in an increasing manner in the transition from one quadrant to another).


## 5. Natural Domain (or Domain of Definition)

### Definition

* The **natural domain** (or **domain of definition**) of a function is the largest subset of ℝ where it makes sense to write the function.

### Example

* **Function**: f(x) = 1/x
* **Natural Domain**: ℝ \ {0} (the set of real numbers excluding zero).

### Continued Example: f(x) = 1/x

We have seen that f(x) = 1/x is injective, but is not decreasing on the entire domain A = (-∞, 0) ∪ (0, +∞).

* **Choice of Points**: We choose one point in the negative quadrant (x₁) and one in the positive quadrant (x₂).

| x₁  | Relation | x₂ | f(x₁) | Relation | f(x₂) | Conclusion |
|-----|----------|-----|-------|----------|-------|------------|
| -1  | <        | 1   | -1    | <        | 1     | Violation! |

* **Result**: Given that x₁ < x₂ led to f(x₁) < f(x₂), the function behaved in an increasing manner in this jump, despite being decreasing in each interval.

This demonstrates the point: a function must be defined as monotone on the entire set in which it is claimed to be so.

---

## 6. Symmetries of Functions

To define even and odd functions, the domain of the function must be symmetric with respect to the origin (i.e., if x is in the domain, -x must also be in it).

### EVEN Function (Symmetry with respect to the y-axis)

* **Definition**: f is called EVEN if f(x) = f(-x) for every x in the domain.
* **Graph**: The graph is symmetric with respect to the y-axis.
* **Example**: f(x) = x²
  * f(-x) = (-x)² = x² = f(x), therefore f is even.

### ODD Function (Symmetry with respect to the origin)

* **Definition**: f is called ODD if f(-x) = -f(x) for every x in the domain.
* **Graph**: The graph is symmetric with respect to the origin.
* **Example**: f(x) = x³
  * f(-x) = (-x)³ = -x³ = -f(x), therefore f is odd.

![symmetrical_function](media/functions/symmetrical.png)

In the image above you can see an even function (**A**) and an odd function (**B**)

---

## 7. Periodic Functions

**Definition**: A function f is called periodic with period P ∈ ℝ if f(x + P) = f(x).

* **Domain Requirement**: If x is in the domain, x + P must also be in it.
* **Example**: f(x) = sin(x) is periodic with period P = 2π.

![periodic_function](media/functions/periodic.png)