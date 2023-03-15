package main

import (
	"fmt"
	"math"
)

func main() {
	cubeA := calculateCube(10)
	fmt.Println(cubeA)
}

func calculateCube(length int64) (result int64) {
	return int64(math.Pow(float64(length), 2))
}
