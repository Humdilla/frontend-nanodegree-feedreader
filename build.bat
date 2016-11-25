@echo off
:: Minify CSS
del dist\css\*.css
for %%f in (src\css\*) do (
  curl -X POST -s --data-urlencode input@%%f -o dist\css\%%~nf.css https://cssminifier.com/raw
)
del dist\lib\jasmine-2.1.2\*.css
for %%f in (src\lib\jasmine-2.1.2\*) do (
  curl -X POST -s --data-urlencode input@%%f -o dist\lib\jasmine-2.1.2\%%~nf.css https://cssminifier.com/raw
)
:: Minify JS
del dist\js\*.js
for %%f in (src\js\*) do (
  curl -X POST -s --data-urlencode input@%%f -o dist\js\%%~nf.js https://javascript-minifier.com/raw
)
del dist\jasmine\lib\jasmine-2.1.2\*.js
for %%f in (src\jasmine\lib\jasmine-2.1.2\*) do (
  curl -X POST -s --data-urlencode input@%%f -o dist\jasmine\lib\jasmine-2.1.2\%%~nf.js https://javascript-minifier.com/raw
)
del dist\jasmine\spec\*.js
for %%f in (src\jasmine\spec\*) do (
  curl -X POST -s --data-urlencode input@%%f -o dist\jasmine\spec\%%~nf.js https://javascript-minifier.com/raw
)
:: Copy HTML file
copy /Y src\index.html dist\index.html
@echo on