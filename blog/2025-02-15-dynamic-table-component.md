---
slug: dynamic-table-component
title: "Building a Dynamic Table Component: Backend Config Driven"
authors: [manasa]
tags: [fintech]
image: https://img.freepik.com/free-vector/minimalist-project-management-daily-checklist_742173-5121.jpg
---


### **Introduction**

In this post, I'll walk you through the development of a dynamic and highly customizable table component. The key idea behind this table is its configuration-driven nature—where all the features, 
<!-- truncate -->

such as column visibility, order, resizing, and more, are controlled by configurations fetched from a backend API. This allows for unparalleled flexibility and adaptability in building complex, data-heavy UIs.

### **Why a Configuration-Driven Table?**

Modern applications often need tables that can handle various data types, support user interactions, and fit into different use cases. While building such a table from scratch could be cumbersome, a configuration-driven approach allows:

- **Separation of concerns:** Let the backend decide on the table’s structure, columns, and behaviour.
- **Flexibility:** Changing the table's configuration requires no code changes in the frontend, making it more scalable and adaptable.
- **Feature-rich tables:** Easily enable or disable powerful table features like sorting, resizing, and variant control by simply updating the configuration.

### **Key Features of the Table Component**

**1. Configuration-Driven Setup**
The table component fetches its entire setup from an API. This includes which columns to display, their visibility, order, and custom configurations such as alignment or variant styling. Here’s how the table structure is controlled:
    - **Column Definitions:** The API provides details about each column, including field name, label, and whether it’s visible or hidden.
    - **Visibility Rules:** Specific columns can be hidden based on roles, user preferences, or other business rules.
    - **Dynamic Order:** The column order is not static, and the backend configuration can dictate how the columns should appear.
 
**2. Out-of-the-Box Features**
To enhance the user experience, this table component offers several built-in features:
    - **Column Ordering:** Users can reorder columns, and these settings can be synced with the backend, ensuring the changes persist across sessions.
    - **Column Visibility:** Users can toggle which columns to show or hide based on their preferences or needs.
    - **Resizing:** Column widths can be adjusted to improve readability and fit more content.
    - **Variants & Table Sizing:** The configuration also allows setting different table styles (compact, spacious, etc.) and variants (striped, bordered, etc.), giving the table a unique look-and-feel based on the context.

**3. Backend-Driven Flexibility**
One of the key aspects of this table is that most of its features are enabled or disabled by backend configurations. This allows for easy customization and quicker adaptations to business needs without touching frontend code. The API configuration includes:
    - **Feature Toggles:** Resizing, sorting, and even advanced features like pagination or infinite scroll can be toggled on/off via configuration.
    - **Responsive Design:** Backend can dictate how the table should behave at different breakpoints, ensuring optimal user experience across devices.
    - **Theme & Styling:** Configurations can also control table styles, enabling easy changes between themes (dark/light) or modifying borders, row colors, and more.

### **How It Works: A Closer Look at the API Configuration**

The heart of this table component lies in the configuration fetched from the API. Here's an example of what a configuration response might look like:

```json
{
   "resource":"sample-data",
   "identifierKey":"data-value",
   "selectionType":"multiple",
   "actions":{
      "header":"Actions",
      "align":"end",
      "fixed":true,
      "minWidth":200,
      "options":[
         {
            "key":"edit",
            "url":"/edit/:id",
            "icon":"SquarePen",
            "method":"GET"
         }
      ]
   },
   "columns":[
      {
         "accessorKey":"id",
         "header":"Sr no.",
         "width":80,
         "maxWidth":80,
         "minWidth":80,
         "fixed":true
      },
      {
         "accessorKey":"state",
         "header":"State",
         "width":100,
         "minWidth":100,
         "show":false
      },
   ],
   "filters":{
      "category":{
         "label":"Category",
         "type":"enum",
         "isNullable":false,
         "options":[
            {
               "label":"One",
               "value":"One"
            },
            {
               "label":"Two",
               "value":"Two"
            }
         ]
      },
      "state":{
         "label":"State",
         "type":"enum",
         "isNullable":false,
         "modelName":"state"
      },
      "city":{
         "label":"City",
         "type":"enum",
         "isNullable":false,
         "dependsOn":[
            "state",
            "district"
         ],
         "modelName":"city"
      },
      "locality":{
         "label":"Locality",
         "type":"enum",
         "isNullable":false,
         "dependsOn":[
            "state",
            "city"
         ],
         "modelName":"locality"
      },
      "availability":{
         "label":"Availablity",
         "type":"boolean"
      }
   }
}
```

This configuration informs the table component of:

- What columns to display.
- The initial order of columns.
- Filters to be available to users and type of value input to be rendered for that filter.

### **Benefits of This Approach**

**1. Easy to Maintain and Scale:** No need to update the frontend codebase every time a column or feature needs to be added or removed—just update the backend configuration.

**2. Improved User Experience:** By giving users control over how they view and interact with the table, it caters to personalized experiences.

**3. Faster Development Cycles:** Decoupling the table’s features from the code allows for faster iterations, as the backend can dictate new table features or adjustments.

### **Challenges & Considerations**

- **API Design**: The backend needs to be designed carefully to ensure the configurations are granular enough for flexibility but not overly complex.
- **Syncing State**: Handling user preferences, such as column order or visibility, and syncing them with the backend can be challenging, especially in real-time scenarios.
- **Performance**: Fetching large configurations or dealing with very complex tables may introduce performance bottlenecks, which would require optimisation.


### **Conclusion**

Building a configuration-driven table component has made managing data-rich interfaces easier, more flexible, and more powerful. By leveraging backend configurations, this approach decouples the frontend and backend, allowing for greater scalability, maintainability, and faster iteration times. Whether you're building dashboards, reports, or admin panels, this method ensures your tables are not just functional but also adaptive to changing business needs

---