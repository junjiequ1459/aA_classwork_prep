function threeOrSevenV2(num) {
    let rem;
    switch (num) {
        case num % 3 == 0:
            rem = true;
            break;
        case num % 7 == 0:
            rem = true;
            break;
        default:
            rem = false;
            break;
    }
    console.log(rem);
}
threeOrSevenV2(3);