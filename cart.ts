// 1) Implicit any
function greet(name: string): string {
  return `Hello, ${name.toUpperCase()}`;
}
// 2) Wrong return type 
function total(items: number[]): number {
  return items.reduce((sum, item) => sum + item, 0);
}
// 3) Property does not exist on type
type Product = { id: number; title: string; price: number };
const p: Product = { id: 1, title: "Notebook", price: 9.99 };
console.log(p.price);
// 4) Unsafe union usage
function printId(id: string | number) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}
// 5) Optional property used without a check
type User = { name: string; email?: string };
function emailDomain(user: User) {
  if (user.email) {
    return user.email.split("@")[1];
  }
  return null;
}




interface CartItem {
  name?: string; // Optional name property for better readability
  price: number;  
  qty: number; // Expected to be a positive integer; 
}

interface CartSummary {
  subtotal: number;
  tax: number;
  total: number;
}

export function formatCartTotal(items: CartItem[], taxRate: number): CartSummary {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const tax = subtotal * taxRate;
  return {
    subtotal,
    tax,
    total: subtotal + tax
  };
}



const result = formatCartTotal(
  [{ name: "Notebook", price: 10, qty: 2 }],
  0.1
);

console.log(result); // { subtotal: 20, tax: 2, total: 22 }