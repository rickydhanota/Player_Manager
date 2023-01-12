import React, {useState, useEffect} from 'react';
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import styles from "./ListTable.module.css";
import { Button } from '@mui/material';

const ListTable = (props) => {

    const [allPlayers, setAllPlayers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/player")
        .then((res) => {
            console.log(res)
            console.log(res.data)
            setAllPlayers(res.data)
        })
        .catch((error) => {
            console.log(error)
        });
    }, []);

    const columns = [
        { field: "id", headerName: "ID", flex: 1 },
        {field: "sport", headerName: "Sport", flex: 1},
        {field: "team", headerName: "Team Name", flex: 1},
        {field: "playerFirst", headerName: "First Name", flex: 1},
        {field: "playerLast", headerName: "Last Name", flex: 1},
        {field: "position", headerName: "Preferred Position", flex: 1},
        {field: "actions", 
        headerName: "Actions", 
        flex: 1, 
        renderCell: (params) => (
            <strong>
              {params.value}
              <Button
                variant="contained"
                size="small"
                style={{ marginLeft: 16 }}
                tabIndex={params.hasFocus ? 0 : -1}
                >
                    Edit
                </Button>
              <Button
                variant="contained"
                size="small"
                style={{ marginLeft: 16 }}
                tabIndex={params.hasFocus ? 0 : -1}
                // sx={{backgroundColor: "#DC143C"}}
              >
                Delete
              </Button>

            </strong> 
          ),
        },   
    ]

    const rows = [];

    const getRows = allPlayers.map((player, index) => {
        return rows.push({
            id: player._id, 
            sport: player.sport, 
            team: player.team, 
            playerFirst: player.firstName, 
            playerLast: player.lastName, 
            position: player.position, 
            // actions: player._id,
        })
    });

    return (
        <div className={styles.listTable}>

            <h3>View All Players</h3>

            <div className={styles.datagrid}>
                <DataGrid columns={columns} rows={rows} />
            </div>
        </div>
    );
};

export default ListTable;