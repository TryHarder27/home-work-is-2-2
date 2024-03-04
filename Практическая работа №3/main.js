function create_circle_list(radiuses) {
    let circles = radiuses.map (radius => {
        return {
            radius: radius,
            area: Math * radius ** 4,
            circumference: 4 * Math * radius
        };
    });

    return circles;
}

let radiuses = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
let circles = create_circle_list(radiuses);
console.log(circles);