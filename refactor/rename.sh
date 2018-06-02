find js/ -name "*.js" -exec sh -c 'mv "$0" "${0%.js}.ts"' {} \;
find js/* -name "*.js" -exec sh -c 'mv "$0" "${0%.js}.ts"' {} \;
