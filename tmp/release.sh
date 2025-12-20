#!/bin/bash

# Activate virtual environment
source ../.venv/bin/activate

# Try to export notebook to PDF (requires LaTeX)
echo "Exporting notebook to PDF..."
if jupyter nbconvert --to pdf --output ../GTNC_ACO.pdf GTNC_ACO.ipynb 2>/dev/null; then
    echo "✅ PDF created successfully with LaTeX"
else
    echo "⚠️  PDF conversion failed (requires pandoc and LaTeX)"
    echo "   Creating HTML version instead..."
    jupyter nbconvert --to html --output ../GTNC_ACO.html GTNC_ACO.ipynb
    echo "   To enable PDF: brew install pandoc basictex"
fi

# Run bundle_aco_slides.py (which outputs to ../ACO_slides_bundled.html)
echo "Running bundle_aco_slides.py..."
python bundle_aco_slides.py

# Copy GTNC_ACO.ipynb to parent directory
echo "Copying notebook to root directory..."
cp GTNC_ACO.ipynb ../

echo "✅ Release process completed!"
echo ""
echo "Output files in root directory:"
echo "  - ACO_slides_bundled.html (presentation)"
if [ -f "../GTNC_ACO.pdf" ]; then
    echo "  - GTNC_ACO.pdf (notebook)"
else
    echo "  - GTNC_ACO.html (notebook)"
fi
echo "  - GTNC_ACO.ipynb (notebook source)"
