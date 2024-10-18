<template>

  <div>  
	<div class="bgimg" id="bgimg" style="width: 450px;height: 450px">
    	  <div style="position:absolute">
		    <img src="/img/map/pod_map.png"  width="450px"  border="0" usemap="#mo_uzMap"  />
   	      </div>
            
    	  <div style="position:absolute">
    	    <img src="/img/map/mo_uz.png" width="450px"  border="0" usemap="#mo_uzMap"  class="img_kl" id='mo_uz' style="visibility:hidden"  />
          </div>
    	  <div style="position:absolute">
    	    <img src="/img/map/mo_uz_.png" width="450px"  border="0" usemap="#mo_uzMap" class="img_" id='mo_uz_'   />
          </div>

    	  <div style="position:absolute">
    	    <img src="/img/map/mo_u.png" width="450px"  border="0" usemap="#mo_uzMap" class="img_kl" id='mo_u' style="visibility:hidden"  />
          </div>
    	  <div style="position:absolute">
      		<img src="/img/map/mo_u_.png" width="450px"  border="0" usemap="#mo_uzMap" class="img_" id='mo_u_'   />
          </div>

    	  <div style="position:absolute">
    	    <img src="/img/map/mo_uv.png" width="450px"  border="0" usemap="#mo_uzMap" class="img_kl" id='mo_uv' style="visibility:hidden"  />
          </div>
		  <div style="position:absolute">
	  		<img src="/img/map/mo_uv_.png" width="450px"  border="0" usemap="#mo_uzMap" class="img_" id='mo_uv_'   />
          </div>


    	  <div style="position:absolute">
    	    <img src="/img/map/mo_v.png" width="450px"  border="0" usemap="#mo_uzMap" class="img_kl" id='mo_v' style="visibility:hidden"  />
          </div>
    	  <div style="position:absolute">
	  		<img src="/img/map/mo_v_.png" width="450px"  border="0" usemap="#mo_uzMap" class="img_" id='mo_v_'   />
          </div>

    	  <div style="position:absolute">
    	    <img src="/img/map/mo_sv.png" width="450px"  border="0" usemap="#mo_uzMap" class="img_kl" id='mo_sv' style="visibility:hidden"  />
          </div>
	      <div style="position:absolute">
	  		<img src="/img/map/mo_sv_.png" width="450px"  border="0" usemap="#mo_uzMap" class="img_" id='mo_sv_'   />
          </div>

    	  <div style="position:absolute">
    	    <img src="/img/map/mo_s.png" width="450px"  border="0" usemap="#mo_uzMap" class="img_kl" id='mo_s' style="visibility:hidden"  />
          </div>
    	  <div style="position:absolute">
	  		<img src="/img/map/mo_s_.png" width="450px"  border="0" usemap="#mo_uzMap" class="img_" id='mo_s_'   />
          </div>

    	  <div style="position:absolute">
    	    <img src="/img/map/mo_sz.png" width="450px"  border="0" usemap="#mo_uzMap" class="img_kl" id='mo_sz' style="visibility:hidden"  />
          </div>
    	  <div style="position:absolute">
	  		<img src="/img/map/mo_sz_.png" width="450px"  border="0" usemap="#mo_uzMap" class="img_" id='mo_sz_'   />
          </div>

    	  <div style="position:absolute">
    	    <img src="/img/map/mo_z.png" width="450px"  border="0" usemap="#mo_uzMap" class="img_kl" id='mo_z' style="visibility:hidden"  />
          </div>
    <div style="position:absolute;">
	  <img src="/img/map/mo_z_.png" width="450px"  border="0" usemap="#mo_uzMap" class="img_" id='mo_z_'   />
          </div>


            <map name="mo_uzMap" id="mo_uzMap">
              <area shape="poly" name="rpoly" title="МО Юго-запад" onclick="moskl(this,document.getElementById('mo_uz') );return false;" onmouseover="mower(document.getElementById('mo_uz_'))" onmouseout="mout(document.getElementById('mo_uz_'))" coords="191,327,207,326,215,304,213,278,216,258,220,240,222,218,206,202,191,210,163,216,136,219,111,227,104,233,88,236,37,230,37,242,41,259,57,254,68,254,80,259,93,263,109,273,123,261,130,252,144,252,156,260,165,264,177,271,185,295" href="#" />
              <area shape="poly" name="rpoly" title="МО Юг" onclick="moskl(this,document.getElementById('mo_u') );return false;" onmouseover="mower(document.getElementById('mo_u_'))" onmouseout="mout(document.getElementById('mo_u_'))" coords="300,408,303,395,299,391,293,378,299,372,300,364,296,352,284,352,272,347,256,333,246,326,235,327,230,345,216,330,222,310,222,293,219,271,226,248,228,224,246,212,262,228,283,247,306,277,339,314,361,335,362,346,352,353,342,358,327,361,321,381,324,393,313,404,311,414" href="#" />
              <area shape="poly" name="rpoly" title="МО Юго-восток" onclick="moskl(this,document.getElementById('mo_uv') );return false;" onmouseover="mower(document.getElementById('mo_uv_'))" onmouseout="mout(document.getElementById('mo_uv_'))" coords="369,333,337,303,309,272,270,229,247,203,247,191,269,186,302,183,325,180,341,178,357,180,362,189,372,192,378,196,388,189,402,184,409,186,413,200,421,210,422,223,433,231,432,242,434,263,414,270,405,277,400,286,407,291,404,301,389,301,383,305,377,317" href="#" />
              <area shape="poly" name="rpoly" title="МО Восток" onclick="moskl(this,document.getElementById('mo_v') );return false;" onmouseover="mower(document.getElementById('mo_v_'))" onmouseout="mout(document.getElementById('mo_v_'))" coords="340,172,329,177,303,179,284,181,260,185,246,185,245,176,241,171,254,157,254,145,284,109,290,101,289,124,293,130,297,144,301,161,312,163" href="#" />
              <area shape="poly" name="rpoly" title="МО Северо-восток" onclick="moskl(this,document.getElementById('mo_sv') );return false;" onmouseover="mower(document.getElementById('mo_sv_'))" onmouseout="mout(document.getElementById('mo_sv_'))" coords="237,169,225,167,221,167,221,146,218,130,217,110,223,95,217,86,215,70,194,46,207,42,218,39,228,32,228,21,237,18,256,30,259,42,274,45,285,50,283,66,283,86,285,94,264,125,248,146" href="#" />
              <area shape="poly" name="rpoly" title="МО Север" onclick="moskl(this,document.getElementById('mo_s') );return false;" onmouseover="mower(document.getElementById('mo_s_'))" onmouseout="mout(document.getElementById('mo_s_'))" coords="217,166,208,169,201,159,190,152,183,137,147,96,147,79,166,69,178,74,186,77,193,67,195,56,205,69,213,83,212,94,216,105,216,127,219,151" href="#" />
              <area shape="poly" name="rpoly" title="МО Северо-запад" onclick="moskl(this,document.getElementById('mo_sz') );return false;" onmouseover="mower(document.getElementById('mo_sz_'))" onmouseout="mout(document.getElementById('mo_sz_'))" coords="44,141,43,134,44,127,48,118,47,114,58,113,61,97,59,89,54,82,71,81,79,93,100,94,115,93,138,85,144,92,169,127,193,157,203,164,205,175,197,184,173,181,147,166,135,157,129,155,100,148,62,144" href="#" />
              <area shape="poly" name="rpoly" title="МО Запад" onclick="moskl(this,document.getElementById('mo_z') );return false;" onmouseover="mower(document.getElementById('mo_z_'))" onmouseout="mout(document.getElementById('mo_z_'))" coords="39,224,71,232,96,230,131,216,169,211,196,205,205,195,203,186,186,188,155,175,133,162,115,155,65,147,41,144,30,151,39,172,43,184,43,205" href="#" />
            </map>
     </div>       
     <div id='shfind' class="shfind" >
         <div class="roadnw road">
            <div class="header" style="cursor:pointer;" onclick="CheckRegion(1);">Северо-запад</div>
            <input type="checkbox" onclick="clickroad(this)" name="road" id="road40" value="Волоколамское"> <label for="road40">Волоколамское</label><br>
            <input type="checkbox" onclick="clickroad(this)" name="road" id="road22" value="Ильинское"> <label for="road22">Ильинское</label><br>
            <input type="checkbox" onclick="clickroad(this)" name="road" id="road9" value="Новорижское"> <label for="road9">Новорижское</label><br>
            <input type="checkbox" onclick="clickroad(this)" name="road" id="road12" value="Пятницкое"> <label for="road12">Пятницкое</label><br>
        </div>
        <div class="roadn road">
            <div class="header" style="cursor:pointer;" onclick="CheckRegion(8);">Север</div>
            <input type="checkbox" onclick="clickroad(this)" name="road" id="road30" value="Алтуфьевское"> <label for="road30">Алтуфьевское</label><br>
            <input type="checkbox" onclick="clickroad(this)" name="road" id="road2" value="Дмитровское"> <label for="road2">Дмитровское</label><br>
            <input type="checkbox" onclick="clickroad(this)" name="road" id="road6" value="Ленинградское"> <label for="road6">Ленинградское</label><br>
            <input type="checkbox" onclick="clickroad(this)" name="road" id="road31" value="Рогачевское"> <label for="road31">Рогачевское</label><br>
            <input type="checkbox" onclick="clickroad(this)" name="road" id="road11" value="Осташковское"> <label for="road11">Осташковское</label><br>
            <input type="checkbox" onclick="clickroad(this)" name="road" id="road14" value="Ярославское"> <label for="road14">Ярославское</label><br>
            <input type="checkbox" onclick="clickroad(this)" name="road" id="road33" value="Новосходненское"> <label for="road33">Новосходненское</label><br>
        </div>        

        <div class="roadw road">
            <div class="header" style="cursor:pointer;" onclick="CheckRegion(2);">Запад</div>
            <input type="checkbox" onclick="clickroad(this)" name="road" id="road13" value="Рублево- Успенское"> <label for="road13">Рублево- Успенское</label><br>
            <input type="checkbox" onclick="clickroad(this)" name="road" id="road7" value="Минское"> <label for="road7">Минское</label><br>
            <input type="checkbox" onclick="clickroad(this)" name="road" id="road8" value="Можайское"> <label for="road8">Можайское</label><br>
            <input type="checkbox" onclick="clickroad(this)" name="road" id="road24" value="Сколковское"> <label for="road24">Сколковское</label><br>
        </div>
        <div class="roadsw road">
            <div class="header" style="cursor:pointer;" onclick="CheckRegion(3);">Юго-запад</div>
            <input type="checkbox" onclick="clickroad(this)" name="road" id="road27" value="Боровское"> <label for="road27">Боровское</label><br>
            <input type="checkbox" onclick="clickroad(this)" name="road" id="road3" value="Калужское"> <label for="road3">Калужское</label><br>
            <input type="checkbox" onclick="clickroad(this)" name="road" id="road5" value="Киевское"> <label for="road5">Киевское</label><br>
        </div>  
        <div class="roads road">
            <div class="header" style="cursor:pointer;" onclick="CheckRegion(4);">Юг</div>
            <input type="checkbox" onclick="clickroad(this)" name="road" id="road15" value="Варшавское"> <label for="road15">Варшавское</label><br>
            <input type="checkbox" onclick="clickroad(this)" name="road" id="road4" value="Каширское"> <label for="road4">Каширское</label><br>
            <input type="checkbox" onclick="clickroad(this)" name="road" id="road17" value="Симферопольское"> <label for="road17">Симферопольское</label><br>
        </div>
        <div class="roade road" >
            <div class="header" style="cursor:pointer;" onclick="CheckRegion(6);">Восток</div>
            <input type="checkbox" onclick="clickroad(this)" name="road" id="road1" value="Горьковское"> <label for="road1">Горьковское</label><br>
            <input type="checkbox" onclick="clickroad(this)" name="road" id="road25" value="Носовихинское"> <label for="road25">Носовихинское</label><br>
            <input type="checkbox" onclick="clickroad(this)" name="road" id="road16" value="Щелковское"> <label for="road16">Щелковское</label><br>
        </div>        
        <div class="roadse road">
            <div class="header" style="cursor:pointer;" onclick="CheckRegion(5);">Юго-восток</div>
            <input type="checkbox" onclick="clickroad(this)" name="road" id="road28" value="Егорьевское"> <label for="road28">Егорьевское</label><br>
            <input type="checkbox" onclick="clickroad(this)" name="road" id="road34" value="Казанское"> <label for="road34">Казанское</label><br>
            <input type="checkbox" onclick="clickroad(this)" name="road" id="road20" value="Рязанское"> <label for="road20">Рязанское</label><br>
            <input type="checkbox" onclick="clickroad(this)" name="road" id="road10" value="Ново-рязанское"> <label for="road10">Ново-рязанское</label><br>
        </div>        
     </div>     
     <div style="position:absolute;top:410px;width:200px"><a href='javascript:showroads()' >Отоброзить шоссе</a></div>  
     
  </div>
<div class='metroupr'>
	<table width='100%'>
		<tr>
			<td width='99%'><div></div></td>
			<td><input class='bmap' type="button" value="Закрыть" onclick="clOk()" /></td>
			<td><input class='bmap' type="button" value="Очистить" onclick="clearR()" /></td>
		</tr>
	</table>
</div>


      
</template>
<style scoped>
.img_
{
	opacity:0.0 /*Ну или сколько там надо*/;	
}

.img_s
{
	opacity:0.3 /*Ну или сколько там надо*/;	
}

.img_kl
{
	opacity:0.3 /*Ну или сколько там надо*/;	
}

.bgimg_{
	opacity:0.3 /*Ну или сколько там надо*/;	
}

.bgimg{
	opacity:1 /*Ну или сколько там надо*/;	
}


.shfind{
	font-size:12px;	
	display:none;
	z-index:1000;
	
}
.shfind .header{
	color:#C90;	
	text-align:center;
}

.shfind_{
	font-size:12px;
	display:block;
	z-index:1000;
}
.shfind_ .header{
	color:#C90;	
	text-align:center;
}


.roadnw{
	width:120px;	
	position:absolute;
	top:40px;
	
}

.roadn{
	width:120px;
	position:absolute;
	top:10px;
	left:160px;
	
}

.roadw{
	width:140px;	
	position:absolute;
	top:180px;
}

.roadsw{
	width:120px;	
	position:absolute;
	top:320px;
}

.roads{
	width:120px;	
	position:absolute;
	top:340px;
	left:160px;	
}

.roade{
	width:120px;	
	position:absolute;
	top:120px;
	left:340px;	
	
}

.roadse{
	width:120px;	
	position:absolute;
	top:290px;
	left:340px;	
	
}
</style>