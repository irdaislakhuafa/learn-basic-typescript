DIST_DIR:="./dist"
clean-compile:
	@ rm -rfv ${DIST_DIR}
	@ tsc

cmp:
	@ npx tsc