function add(a,b) {
  return a + b }
function subtract(a,b) {
  return a - b } 
function multiply(a, b) {
  return a * b }
function divide(a,b) {
  return a / b }
function inc(n) {
  var number = n++ 
  return n }
function dec(a) {
  var number = a-- 
  return a }
function makeInt(a) {
  return parseInt(a) }
function preserveDecimal(a) {
  return parseFloat(a) }
function makeInt(a) {
  return `toString(a)`
}