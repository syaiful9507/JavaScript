/**
 * Nullish Coalescing Operator
 * Nullish value adalah null dan undefined
 * Nullish coalescing operator (??) adalah operator mirip dengan ternary operator, 
 * yang membedakan adalah pada kondisi, jika bernilai null atau undefined, baru value-nya diambil
 */

/**
 * Without Nullish coalescing Operator
 */
let parameter;
let data = parameter;
if (data === undefined || data == null) {
    data = "Default Value";
}
console.log(data);
/**
 * With Nullish Coalescing Operator
 */
data = parameter ?? "Default Value";
console.log(data);