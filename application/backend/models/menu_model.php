<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Menu_model extends CI_Model {

	private $table;
	private $table_fields;
	private $table_fields_join;

    function __construct() {
        parent::__construct();

		$this->table = 'menu';

		$this->table_fields = array(
			$this->table.'.id',
			$this->table.'.parentitemid',
			$this->table.'.title',
			$this->table.'.url',
			$this->table.'.leaf'
		);

		$this->table_fields_join = array();
    }

    function get_all_entries($node) {
		$this->db->where('parentitemid',$node);
		$this->db->from($this->table);
		
		$news_db_query = $this->db->get();
		
		foreach ($news_db_query->result() as $result){
			if($result->leaf==0){
				$data[] = array(
					'id' => $result->id,
					'parentitemid' => $result->parentitemid,
					'text' => $result->title,
					'url' => $result->url,
					'leaf' => $result->leaf,
					'children' => $this->get_all_entries($result->id)
				);
			}else{
				$data[] = array(
					'id' => $result->id,
					'parentitemid' => $result->parentitemid,
					'text' => $result->title,
					'url' => $result->url,
					'leaf' => $result->leaf
				);
			}
			
		}
		
		if ($news_db_query->num_rows > 0) {
		    return $data;
		} else {
		    return false;
		}
    }

	function count_all_entries($filter = array()) {
        $this->db->from($this->table);

		if (is_array($filter) && count($filter) > 0) generate_filter($filter);

        return $this->db->count_all_results();
    }

    function insert_entry($data) {
        $this->db->insert($this->table, $data);

        if($this->db->affected_rows() == 1) {
            return $this->db->insert_id();
        } else {
            return false;
        }
    }

    function update_entry($filter = array(), $data) {
        if (is_array($filter) && count($filter) > 0) generate_filter($filter);

        $this->db->update($this->table, $data);

        if($this->db->affected_rows() == 1) {
            return true;
        } else {
            return false;
        }
    }

    function delete_enry($filter = array()) {
        if (is_array($filter) && count($filter) > 0) generate_filter($filter);

        $this->db->delete($this->table);

        if($this->db->affected_rows() > 0) {
            return true;
        } else {
            return false;
        }
    }

}