const permutation = (arr, num) => {
    if(num === 1) return [arr]

    let res = []

    arr.forEach((v, idx, arr) => {
        const rest = [...arr.slice(0, idx), ...arr.slice(idx+1)]
        const permutations = permutation(rest, num-1)
        const attach = permutations.map((permutation) => [v, ...permutation])

        res.push(...attach)
    })
    return res
}

console.log(permutation([1,2,3,4], 4))