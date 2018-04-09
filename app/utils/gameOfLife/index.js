import beehive from "./patterns/beehive.json";
import block from "./patterns/block.json";
import boat from "./patterns/boat.json";
import loaf from "./patterns/loaf.json";
import tub from "./patterns/tub.json";
import beacon from "./patterns/beacon.json";
import blinker from "./patterns/blinker.json";
import pentadecathlon from "./patterns/pentadecathlon.json";
import pulsar from "./patterns/pulsar.json";
import r_pentomino from "./patterns/r_pentomino.json";
import toad from "./patterns/toad.json";
import glider from "./patterns/glider.json";
import lightweight from "./patterns/lightweight.json";

class gameOfLife {
    createGrid(rows = 6, cols = 6, value = 0) {
        let arr = [];

        for (let i = 0; i < rows; i++) {
            arr[i] = [];

            for (let e = 0; e < cols; e++) {
                arr[i].push(0);
            }
        }

        return arr;
    }

    fillGrid(grid) {
        for (let j = 0; j < grid.length; j++) {
            for (let k = 0; k < grid[j].length; k++) {
                grid[j][k] = Math.round(Math.random()) === 1 ? 1 : 0;
            }
        }

        return grid;
    }

    getPattern(name) {
        switch (name) {
            case "beehive":
                return beehive.pattern;
            case "block":
                return block.pattern;
            case "boat":
                return boat.pattern;
            case "loaf":
                return loaf.pattern;
            case "tub":
                return tub.pattern;
            case "beacon":
                return beacon.pattern;
            case "blinker":
                return blinker.pattern;
            case "pentadecathlon":
                return pentadecathlon.pattern;
            case "pulsar":
                return pulsar.pattern;
            case "r_pentomino":
                return r_pentomino.pattern;
            case "toad":
                return toad.pattern;
            case "glider":
                return glider.pattern;
            case "lightweight":
                return lightweight.pattern;
            default:
                return blinker.pattern;
        }
    }

    nextGeneration(grid) {
        let current_gen = grid;
        let next_gen = [];
        let length_y = grid.length;
        let length_x;

        for (let y = 0; y < length_y; y++) {
            length_x = current_gen[y].length;
            next_gen[y] = [];

            for (let x = 0; x < length_x; x++) {
                let cell = current_gen[y][x];

                let row_above = y - 1 >= 0 ? y - 1 : length_y - 1;
                let row_below = y + 1 <= length_y - 1 ? y + 1 : 0;

                let column_left = x - 1 >= 0 ? x - 1 : length_x - 1;
                let column_right = x + 1 <= length_x - 1 ? x + 1 : 0;

                let neighbours = {
                    top_left: current_gen[row_above][column_left],
                    top_center: current_gen[row_above][x],
                    top_right: current_gen[row_above][column_right],
                    left: current_gen[y][column_left],
                    right: current_gen[y][column_right],
                    bottom_left: current_gen[row_below][column_left],
                    bottom_center: current_gen[row_below][x],
                    bottom_right: current_gen[row_below][column_right]
                };

                let alive_count = 0;
                let dead_count = 0;
                for (let neighbour in neighbours) {
                    if (neighbours[neighbour] === 0) {
                        dead_count++;
                    } else {
                        alive_count++;
                    }
                }

                let new_state = cell;
                if (cell === 1) {
                    if (alive_count < 2 || alive_count > 3) {
                        new_state = 0;
                    } else if (alive_count === 2 || alive_count === 3) {
                        new_state = 1;
                    }
                } else {
                    if (alive_count === 3) {
                        new_state = 1;
                    }
                }

                next_gen[y][x] = new_state;
            }
        }

        return next_gen;
    }
}

export default gameOfLife;
