function e(){var e=document.querySelector(".field"),t=e.rows.length,o=e.rows[0].cells.length,r=document.querySelector(".remove-row.button"),l=document.querySelector(".remove-column.button"),n=document.querySelector(".append-row.button"),c=document.querySelector(".append-column.button");r.disabled=t<=2,n.disabled=t>=10,l.disabled=o<=2,c.disabled=o>=10,r.style.display=t<=2,n.style.display=t>=10,l.style.display=o<=2,c.style.display=o>=10}document.querySelector(".container").addEventListener("click",function(t){var o=document.querySelector(".field"),r=o.rows.length,l=o.rows[0].cells.length;if(t.target.matches(".append-row.button")&&r<10){for(var n=o.insertRow(),c=0;c<l;c++)n.insertCell(c).textContent="";r+=1}if(t.target.matches(".remove-row.button")&&r>2&&(o.deleteRow(r-1),r-=1),t.target.matches(".append-column.button")&&l<10){for(var d=0;d<r;d++)o.rows[d].insertCell().textContent="";l+=1}if(t.target.matches(".remove-column.button")&&l>2){for(var s=0;s<r;s++)o.rows[s].deleteCell(-1);l-=1}e()}),e();
//# sourceMappingURL=index.ce26a8e1.js.map
