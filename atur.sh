#!/bin/bash

echo "Membangun kembali daftar paket.."
echo "--------------------------"

rm -Rf Packages.bz2
dpkg-scanpackages -m ./debs > Packages
bzip2 Packages

echo "--------------------------"
echo "Selesai."
echo

git add --all
git commit -m "lailaazmi"

echo

git push

echo

git pull


