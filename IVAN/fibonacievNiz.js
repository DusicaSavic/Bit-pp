var f = 0, g = 1;
// i = 0: 0, f = 1, g = 0
// i = 1: 1, f = 1, g = 1
// i = 2: 1, f = 2, g = 1
// i = 3: 2, f = 3, g = 2
// i = 4: 3, f = 5, g = 3 
// i = 5: 5, f = 8, g = 5
// i = 6 

for (var i = 0; i <= 5; i++) {
    console.log(f);
    f = f + g;
    g = f - g;
}
