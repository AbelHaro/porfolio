#!/bin/bash

# Compilar versión en español
echo '\def\spanish{1}\input{cv_plantilla.tex}' > temp_es.tex
TEXINPUTS=".:" pdflatex temp_es.tex
mv temp_es.pdf cv_es.pdf

# Compilar versión en inglés
echo '\input{cv_plantilla.tex}' > temp_en.tex
TEXINPUTS=".:" pdflatex temp_en.tex
mv temp_en.pdf cv_en.pdf

# Limpiar archivos temporales
rm -f *.aux *.log *.out *.synctex.gz temp_*.tex