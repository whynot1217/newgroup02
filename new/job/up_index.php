<?
	$n_url = "./";
	//include ��� �ȸԾ ����
	include "../../module/class/class.DbCon.php";
	include "../../module/class/class.Util.php";

	include "../header.php";

	if(!$type)	$type = 'list';

	

	if(!$f_search)	$f_search = '����';

	if($f_search == '����')	$subtit = '������Ȳ';
	elseif($f_search == '��û')	$subtit = '��û����';
	elseif($f_search == '��ü')	$subtit = '��ü����';

if(!$state){
	$state='��û';
}

?>

<!-- <link type='text/css' rel='stylesheet' href='/css/style.css'> -->
<link type='text/css' rel='stylesheet' href='/css/button.css'>

<script language='javascript'>
function job_search(job){
	form01 = document.form1;
	form01.f_search.value = job;
	form01.record_start.value = '';
	
	form02 = document.frm01;
	form02.submit();
}
</script>



<?

?>



<div class="main">
	<?
		include "../top_header.php";
	?>

	<div class="mobile_col_wrap">
		<div class="content_wrap">  

			<div class="main_content_left_sub">
				<div class="new_tbl_wrap">
					<div class="list_top">
						<div class="sub_title" ><?=$subtit?></div>
						<?if($type=='list'){?><a href='up_index.php?type=write'><span class="material-symbols-outlined">add</span></a><?}?>
					</div>					
						<?
							switch($type){									
								case 'list' :
													include 'list.php';
													break;

								case 'view' :
													include 'view.php';
													break;

								case 'write' :
								case 'edit' :
													include 'write.php';
													break;

							}
						?>
				</div>
				<!--//���̺� �� -->

			</div>

					
			<?
				include '../rightContent.php';
			?>
			
		</div>
		<!-- // content_wrap -->


	</div>
</div>
