if [ $# -eq 0 ]; then
    echo "No arguments supplied"
else
    for arg in "$1" "$2" "$3"
    do
        if [ ! -z "$arg" ]; then
            echo "$arg"
        fi
    done
fi