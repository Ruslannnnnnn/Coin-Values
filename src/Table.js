import React from "react";
import './Table.css';




function Table() {
    return (
      <div className="container">
        <tr>
          <th><strong><a href="/">#</a></strong></th>
          <th><strong><a href="/">Name</a></strong></th>
          <th><strong><a href="/">Capitalization</a></strong></th>
          <th><strong><a href="/">Price</a></strong></th> 
          <th><strong><a href="/">Market Volume</a></strong></th>
          <th><strong><a href="/">Change (24h)</a></strong></th>
        </tr>
        <tr>
            <td>1</td>
            <td><a href="https://coinmarketcap.com/currencies/bitcoin/"><strong>Bitcoin</strong></a></td>
            <td>$153 398 697 210</td>
            <td><a href="https://coinmarketcap.com/currencies/bitcoin/"><span class="colortext2">$8 439,25</span></a></td>
            <td><a href="https://coinmarketcap.com/currencies/bitcoin/"><span class="colortext2">$23 667 373 147</span></a></td>
            <td><span class="colortext">-2,20%</span></td>
        </tr>
        <tr>
            <td>2</td>
            <td><a href="https://coinmarketcap.com/currencies/ethereum/"><strong>Ethereum</strong></a></td>
            <td>$17 325 899 183</td>
            <td><a href="https://coinmarketcap.com/currencies/ethereum/"><span class="colortext2">$158,36</span></a></td>
            <td><a href="https://coinmarketcap.com/currencies/ethereum/"><span class="colortext2">$10 152 946 109</span></a></td>
            <td><span class="colortext">-3,58%</span></td>
        </tr>
        <tr>
            <td>3</td>
            <td><a href="https://coinmarketcap.com/currencies/xrp/"><strong>XRP</strong></a></td>
            <td>$9 432 553 852</td>
            <td><a href="https://coinmarketcap.com/currencies/xrp/"><span class="colortext2">$0,215967</span></a></td>
            <td><a href="https://coinmarketcap.com/currencies/xrp/"><span class="colortext2">$1 563 253 785</span></a></td>
            <td><span class="colortext">-5,21%</span></td>
        </tr>
         <tr>
            <td>4 </td>
            <td><a href="https://coinmarketcap.com/currencies/bitcoin-cash/"><strong>Bitcoin Cash</strong></a></td>
            <td>$5 562 125 759</td>
            <td><a href="https://coinmarketcap.com/currencies/bitcoin-cash/"><span class="colortext2">$304,94</span></a></td>
            <td><a href="https://coinmarketcap.com/currencies/bitcoin-cash/"><span class="colortext2">$2 993 556 407</span></a></td>
            <td><span class="colortext">-9,48%</span></td>
        </tr>
        <tr>
            <td>5 </td>
            <td><a href="https://coinmarketcap.com/currencies/bitcoin-sv/"><strong>Bitcoin SV</strong></a></td>
            <td>$5 000 946 666</td>
            <td><a href="https://coinmarketcap.com/currencies/bitcoin-sv/"><span class="colortext2">$274,44</span></a></td>
            <td><a href="https://coinmarketcap.com/currencies/bitcoin-sv/"><span class="colortext2">$3 065 815 575</span></a></td>
            <td><span class="colortext">-2,16%</span></td>
        </tr>
    </div>
    )
} 

export default Table;
