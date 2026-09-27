#!/bin/bash
set -euo pipefail
cd -- "$(dirname -- "${BASH_SOURCE[0]}")"

# Solo el CV genérico se publica en la web.
output_dir="../public/curriculum"
mkdir -p "$output_dir"
build_dir=$(mktemp -d)
trap 'rm -rf -- "$build_dir"' EXIT

for lang in es en; do
  input='\input{cv_plantilla.tex}'
  if [[ "$lang" == es ]]; then
    input='\def\spanish{1}\input{cv_plantilla.tex}'
  fi
  pdflatex -interaction=nonstopmode -halt-on-error \
    -output-directory="$build_dir" -jobname="cv_$lang" "$input"
  cp "$build_dir/cv_$lang.pdf" "$output_dir/abel_haro_armero_cv_$lang.pdf"
done
